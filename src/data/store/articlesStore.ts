import { create } from 'zustand'
import { GetArticleQuery } from '../../API';

type ArticlesStore = {
    articles: GetArticleQuery['getArticle'] | null;
    setArticles: (articles: GetArticleQuery['getArticle'] | null) => void;
};

export const useArticlesStore = create<ArticlesStore>((set) => ({
    articles: null,
    setArticles: (articles) => set({ articles }),
}));
