import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axiosInstance from '../axios';
import type { Article } from '../type';

interface NewsStore {
  articles: Article[];
  loading: boolean;
  totalResults: number;
  currentPage: number;
  getData: (page?: number, pageSize?: number) => Promise<void>;
  reset: () => Promise<void>;
}

const useNewsStore = create<NewsStore>()(
  persist(
    (set, get) => ({
      articles: [],
      loading: false,
      totalResults: 0,
      currentPage: 1,

      getData: async (page?: number, pageSize?: number) => {
        const currentPage = page || get().currentPage;

        set({ loading: true });
        try {
          const res = await axiosInstance.get('/everything', {
            params: {
              q: 'general',
              page: currentPage,
              pageSize: pageSize || 9,
            },
          });

          const newArticles = res.data.articles || [];
          set((state) => ({
            articles: [...state.articles, ...newArticles],
            totalResults: res.data.totalResults || 0,
            loading: false,
            currentPage: currentPage + 1,
          }));

          window.dispatchEvent(new Event('resize'));
        } catch (error) {
          set({ loading: false });
          window.dispatchEvent(new Event('resize'));
        }
      },

      reset: async () => {
        set({
          articles: [],
          loading: false,
          totalResults: 0,
          currentPage: 1,
        });
        await get().getData(1, 9);
      },
    }),
    {
      name: 'news-storage',
      storage: {
        getItem: (name) => {
          const item = sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
      partialize: (state) => ({
      articles: state.articles,
      totalResults: state.totalResults,
      currentPage: state.currentPage,
      loading: false,
      getData: async () => {},
      reset: async () => {},
    }),
  }
  )
);

export default useNewsStore;
