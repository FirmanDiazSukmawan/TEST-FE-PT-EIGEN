import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Article } from '../type';

type ArticleStore = {
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article) => void;
  clearArticle: () => void;
};

const useArticleStore = create<ArticleStore>()(
  persist(
    (set) => ({
      selectedArticle: null,
      setSelectedArticle: (article) => set({ selectedArticle: article }),
      clearArticle: () => set({ selectedArticle: null }),
    }),
    {
      name: 'selected-article',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useArticleStore;
