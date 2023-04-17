import { API } from 'aws-amplify';
import { getProject } from '../../graphql/queries';
import { useProjectStore } from '../store/projectStore';

import type { GetProjectQuery, GetProjectQueryVariables } from '../../API';

export async function readProjectAttribute(slug: GetProjectQueryVariables["slug"], session: any) : Promise<GetProjectQuery['getProject']> {

    try {
        if(session) {
          const response = await API.graphql<GetProjectQuery>({
            query: getProject,
            variables: {
              slug: slug,
            },
            authToken: "custom-authorized"
          }) as { data: GetProjectQuery | undefined };

          if (!response.data || !response.data.getProject) {
            throw new Error('getProject query failed');
          }

          useProjectStore.setState({ project: response.data.getProject });

          return response.data.getProject;
        }
      } catch (err) {
        console.error('readProjectAttribute error', err);
        throw err;
      }
}
