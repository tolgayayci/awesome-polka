import { API } from 'aws-amplify';
import { createArticle } from '../../graphql/mutations';

import type { CreateArticleMutation } from '../../API';
import type { CreateArticleInput } from '../../API';

export async function createArticleAttribute(values: CreateArticleInput): Promise<CreateArticleMutation['createArticle']>{
    try{
        const response = await API.graphql({
            query: createArticle, 
            variables: {
                input: {
                    ...values
                }
            }
        }) as { data: CreateArticleMutation | undefined };

        if(!response.data || !response.data.createArticle){
            throw new Error('createProject mutation failed');
        }

        return response.data.createArticle;
    }
    catch(err){
        console.error('createArticleerror', err);
        throw err;
    }
}