import { useState, useEffect } from "react";
import { readArticleAttribute } from "../data/queries/readArticleAttribute";
import { useArticlesStore } from "../data/store/articlesStore";

import type { Article } from "../API";

export function useCheckArticle(id: Article["id"]) {
  const article = useArticlesStore((state) => state.articles);
  const [isLoading, setIsLoading] = useState(true);

  async function check() {
    try {
      if (article?.id !== id) {
        await readArticleAttribute(id);
      }
    } catch (error) {
      console.log("useCheckProject error");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    check();
  });

  return { isLoading, article };
}