import { API } from 'aws-amplify';
import { createUser } from '../../graphql/mutations';

import type { CreateUserMutation, CreateUserInput } from '../../API';

import { toast } from 'react-hot-toast';

export async function createUserAttribute(values: CreateUserInput): Promise<CreateUserMutation['createUser']>{
    
    try{
        const response = await API.graphql({
            query: createUser, 
            variables: {
                input: {
                    ...values
                }
            },
            authToken: localStorage.getItem('accessToken') as string,
        }) as { data: CreateUserMutation | undefined };

        if(!response.data || !response.data.createUser){
            throw new Error('createUser mutation failed');
        }

        toast.success('User created successfully');

        return response.data.createUser;
    }
    catch(err){
        console.error('createUserError', err);
        toast.error('User create failed');
        throw err;
    }
}