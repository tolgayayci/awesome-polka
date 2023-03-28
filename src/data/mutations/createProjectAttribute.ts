import { API } from 'aws-amplify';
import { createProject } from '../../graphql/mutations';

import type { CreateProjectMutation } from '../../API';

export async function createProjectAttribute(): Promise<CreateProjectMutation['createProject']>{
    try{
        const response = await API.graphql({
            query: createProject, 
            variables: {
                input: {
                    slug: 'lens-protocol',
                    name: 'Lens Protocol',
                    bio: 'Social',
                    hasToken: false
                }
            }
        }) as { data: CreateProjectMutation | undefined };

        if(!response.data || !response.data.createProject){
            throw new Error('createProject mutation failed');
        }

        return response.data.createProject;
    }
    catch(err){
        console.error('createProjectPage error', err);
        throw err;
    }
}