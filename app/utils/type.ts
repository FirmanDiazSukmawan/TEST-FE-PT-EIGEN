type Source = {
  id: string | null;  
  name: string;
};

export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt:string;
  source:Source,
  title: string;
  url: string;
  urlToImage: string ;
};

export type responseDataArticle = {
  articles:Article[];
  status: string;
  totalResults: number;
}