import { API } from 'aws-amplify';
import { listProjects } from '../../graphql/queries';
import { useProjectStore } from '../store/projectStore';

import type { ListProjectsQuery } from '../../API';

export async function readProjectsAttribute() : Promise<ListProjectsQuery['listProjects']> {

    try {
          const response = await API.graphql<ListProjectsQuery>({
            query: listProjects,
            authToken: localStorage.getItem('accessToken') as string,
          }) as { data: ListProjectsQuery | undefined };

          if (!response.data || !response.data.listProjects) {
            throw new Error('getProject query failed');
          }

          useProjectStore.setState({ projects: response.data.listProjects });

          return response.data.listProjects;
        
      } catch (err) {
        console.error('readProjectAttribute error', err);
        throw err;
      }
}
