import { API } from 'aws-amplify';
import { getArticle } from '../../graphql/queries';
import { useArticlesStore } from '../store/articlesStore';

import type { GetArticleQuery, GetArticleQueryVariables } from '../../API';

export async function readArticleAttribute(id: GetArticleQueryVariables["id"]) : Promise<GetArticleQuery['getArticle']> {

    try {
          const response = await API.graphql<GetArticleQuery>({
            query: getArticle,
            variables: {
              id: id,
            },
            authToken: localStorage.getItem('accessToken') as string,
          }) as { data: GetArticleQuery | undefined };

          if (!response.data || !response.data.getArticle) {
            throw new Error('getProject query failed');
          }

          useArticlesStore.setState({ articles: response.data.getArticle });

          return response.data.getArticle;
        
      } catch (err) {
        console.error('readProjectAttribute error', err);
        throw err;
      }
}
