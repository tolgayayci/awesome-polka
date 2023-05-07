import { API } from 'aws-amplify';
import { getUser } from '../../graphql/queries';
import { useUserStore } from '../store/userStore';

import type { GetUserQuery, GetUserQueryVariables } from '../../API';

export async function readUserAttribute(walletAddress: GetUserQueryVariables["walletAddress"]) : Promise<GetUserQuery['getUser']> {

    try {
          const response = await API.graphql<GetUserQuery>({
            query: getUser,
            variables: {
              walletAddress: walletAddress,
            },
            authToken: localStorage.getItem('accessToken') as string,
          }) as { data: GetUserQuery | undefined };

          if (!response.data || !response.data.getUser) {
            throw new Error('getProject query failed');
          }

          useUserStore.setState({ user: response.data.getUser });

          return response.data.getUser;
        
      } catch (err) {
        console.error('readUser error', err);
        throw err;
      }
}
