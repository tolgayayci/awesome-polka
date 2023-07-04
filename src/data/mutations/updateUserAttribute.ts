import { API } from 'aws-amplify';
import { updateUser } from '../../graphql/mutations';
import { useUserStore } from '../store/userStore';

import type { UpdateUserMutation, UpdateUserMutationVariables } from '../../API';

import { toast } from 'react-hot-toast';

export async function updateUserAttribute(object: UpdateUserMutationVariables["input"]) : Promise<UpdateUserMutation['updateUser']>{  

  try {
        const response = await API.graphql<UpdateUserMutation>({
          query: updateUser,
          variables: {
            input: {
              ...object,
            },
          },
          authToken: localStorage.getItem('accessToken') as string,
        }) as { data: UpdateUserMutation | undefined };

        if (!response.data || !response.data.updateUser) {
          throw new Error('updateUser mutation failed');
        }

        useUserStore.setState({ user: response.data.updateUser });
        toast.success('User updated successfully');

        return response.data.updateUser;

      } catch (err) {
        console.error('updateUserAttribute error', err);
        toast.error('User update failed');
        throw err;
      }
}

