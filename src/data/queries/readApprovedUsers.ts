import { API } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import { useUserStore } from '../store/userStore';

import { UserStatus } from '../../API';
import type { ListUsersQuery } from '../../API';

export async function readApprovedUsers() : Promise<ListUsersQuery['listUsers']> {

    try {
          const response = await API.graphql<ListUsersQuery>({
            query: listUsers,
            variables: { filter: {
              or: [
                { status: { eq: UserStatus.APPROVED } },
                { status: { eq: UserStatus.BLOCKED } }
              ]
            } },
            authToken: localStorage.getItem('accessToken') as string,
          }) as { data: ListUsersQuery | undefined };

          if (!response.data || !response.data.listUsers) {
            throw new Error('getProject query failed');
          }

          useUserStore.setState({ users: response.data.listUsers });

          return response.data.listUsers;
        
      } catch (err) {
        console.error('listUser error', err);
        throw err;
      }
}
