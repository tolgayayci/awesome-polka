import { API } from 'aws-amplify';
import { updateProject } from '../../graphql/mutations';
import { useProjectStore } from '../store/projectStore';

import type { UpdateProjectMutation, UpdateProjectMutationVariables } from '../../API';

import { toast } from 'react-hot-toast';

export async function updateProjectAttribute(object: UpdateProjectMutationVariables["input"]) : Promise<UpdateProjectMutation['updateProject']>{  

  try {
        const response = await API.graphql<UpdateProjectMutation>({
          query: updateProject,
          variables: {
            input: {
              ...object,
            },
          },
          authToken: localStorage.getItem('accessToken') as string,
        }) as { data: UpdateProjectMutation | undefined };

        if (!response.data || !response.data.updateProject) {
          throw new Error('updateProject mutation failed');
        }

        useProjectStore.setState({ project: response.data.updateProject });
        toast.success('Project updated successfully');

        return response.data.updateProject;

      } catch (err) {
        console.error('updateProjectAttribute error', err);
        toast.error('Project update failed');
        throw err;
      }
}

