import { API } from 'aws-amplify';
import { createArticle } from '../../graphql/mutations';
import { useArticlesStore } from '../store/articlesStore';

import type { CreateArticleMutation, CreateArticleInput } from '../../API';

import { toast } from 'react-hot-toast';

export async function createArticleAttribute(values: CreateArticleInput): Promise<CreateArticleMutation['createArticle']>{
    try{
        const response = await API.graphql({
            query: createArticle, 
            variables: {
                input: {
                    ...values
                }
            },
            authToken: localStorage.getItem('accessToken') as string,
        }) as { data: CreateArticleMutation | undefined };

        if(!response.data || !response.data.createArticle){
            throw new Error('createProject mutation failed');
        }

        useArticlesStore.setState({ articles: response.data.createArticle });
        toast.success('Article created successfully');

        return response.data.createArticle;
    }
    catch(err){
        console.error('createArticleerror', err);
        toast.error('Article create failed');
        throw err;
    }
}