import { API } from 'aws-amplify';
import { updateProject } from '../../graphql/mutations';
import { useProjectStore } from '../store/projectStore';

import type { UpdateProjectMutation, UpdateProjectMutationVariables } from '../../API';
import type { FaqProps } from '../../types/types';

// This function is used to update a single attribute of a project, not the entire project
export async function updateProjectAttribute(slug: UpdateProjectMutationVariables["input"]["slug"], attributeName: string, attributeValue: string | FaqProps[]) : Promise<UpdateProjectMutation['updateProject']>{
    try {
        const response = await API.graphql<UpdateProjectMutation>({
          query: updateProject,
          variables: {
            input: {
              slug,
              [attributeName]: attributeValue,
            },
          },
        }) as { data: UpdateProjectMutation | undefined };

        if (!response.data || !response.data.updateProject) {
          throw new Error('updateProject mutation failed');
        }

        useProjectStore.setState({ project: response.data.updateProject });

        return response.data.updateProject;

      } catch (err) {
        console.error('updateProjectAttribute error', err);
        throw err;
      }
}