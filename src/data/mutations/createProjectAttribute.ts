import { API } from 'aws-amplify';
import { createProject } from '../../graphql/mutations';

import type { CreateProjectMutation, CreateProjectInput } from '../../API';

import { toast } from 'react-hot-toast';

export async function createProjectAttribute(values: CreateProjectInput): Promise<CreateProjectMutation['createProject']>{
    
    try{
        const response = await API.graphql({
            query: createProject, 
            variables: {
                input: {
                    ...values
                }
            },
            authToken: localStorage.getItem('accessToken') as string,
        }) as { data: CreateProjectMutation | undefined };

        if(!response.data || !response.data.createProject){
            throw new Error('createProject mutation failed');
        }

        toast.success('Project created successfully');

        return response.data.createProject;
    }
    catch(err){
        console.error('createProjectError', err);
        toast.error('Project create failed');
        throw err;
    }
}