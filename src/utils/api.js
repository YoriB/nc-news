import axios from 'axios';

const articlesAPI = axios.create({
  baseURL: 'https://yoris-nc-news.onrender.com/api',
});

export const getArticlesApi = () => {
  return articlesAPI.get('/articles').then(({ data }) => {
    return data;
  });
};

export const getArticleByIdApi = (article_id) => {
return articlesAPI.get(`/articles/${article_id}`).then(({ data }) => {

return data;
  });
};


export const getCommentsByArticleIdApi = (article_id) => {
  return articlesAPI.get(`/articles/${article_id}/comments`).then(({ data }) => {
   
   return data;
  })
}