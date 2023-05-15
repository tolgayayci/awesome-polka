import { renderHook, act } from "@testing-library/react-hooks";
import { useCheckArticle } from "../useCheckArticle";
import { readArticleAttribute } from "../../data/queries/readArticleAttribute";
import { useArticlesStore } from "../../data/store/articlesStore";

jest.mock("../../data/queries/readArticleAttribute");
jest.mock("../../data/store/articlesStore");

describe("useCheckArticle", () => {
  beforeEach(() => {
    (useArticlesStore as jest.Mock).mockReturnValue({ articles: [] });
    (readArticleAttribute as jest.Mock).mockResolvedValue(null);
  });

  it("should set isLoading to false and not update article when the article is not found", async () => {
    const articleId = "test-article";
    const { result, waitForNextUpdate } = renderHook(() => useCheckArticle(articleId));

    await waitForNextUpdate();

    expect(result.current.article).toEqual({ articles: [] });
    expect(result.current.isLoading).toBe(false);
  });

  it("should handle errors and set isLoading to false", async () => {
    const articleId = "test-article";
    const errorMessage = "Error fetching article";
    (readArticleAttribute as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => useCheckArticle(articleId));

    await waitForNextUpdate();

    expect(result.current.article).toEqual({ articles: [] });
    expect(result.current.isLoading).toBe(false);
  });
});
