import { API } from 'aws-amplify';
import { deleteProject } from '../../graphql/mutations';

import type { DeleteProjectMutation, DeleteProjectMutationVariables } from '../../API';

export async function deleteProjectAttribute(id: DeleteProjectMutationVariables["input"]["id"]) : Promise<DeleteProjectMutation['deleteProject']> {
    try {
        const response = await API.graphql<DeleteProjectMutation>({
          query: deleteProject,
          variables: {
            input: {
              id,
            },
          },
        }) as { data: DeleteProjectMutation | undefined };

        if (!response.data || !response.data.deleteProject) {
          throw new Error('deleteProject mutation failed');
        }

        return response.data.deleteProject;

      } catch (err) {
        console.error('deleteProjectAttribute error', err);
        throw err;
      }
}
