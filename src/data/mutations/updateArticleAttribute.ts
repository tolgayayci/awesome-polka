import { API } from 'aws-amplify';
import { updateArticle } from '../../graphql/mutations';
import { useArticlesStore } from '../store/articlesStore';

import type { UpdateArticleMutation, UpdateArticleMutationVariables } from '../../API';

import { toast } from 'react-hot-toast';

export async function updateArticleAttribute(object: UpdateArticleMutationVariables["input"]) : Promise<UpdateArticleMutation['updateArticle']>{  

  try {
        const response = await API.graphql<UpdateArticleMutation>({
          query: updateArticle,
          variables: {
            input: {
              ...object,
            },
          },
          authToken: localStorage.getItem('accessToken') as string,
        }) as { data: UpdateArticleMutation | undefined };

        if (!response.data || !response.data.updateArticle) {
          throw new Error('updateArticle mutation failed');
        }

        useArticlesStore.setState({ articles: response.data.updateArticle });
        toast.success('Article updated successfully');

        return response.data.updateArticle;

      } catch (err) {
        console.error('updateArticleAttribute error', err);
        toast.error('Article update failed');
        throw err;
      }
}

