import axios from 'axios';

const articlesAPI = axios.create({
  baseURL: 'https://yoris-nc-news.onrender.com/api',
});

export const getArticlesApi = () => {
  return articlesAPI.get('/articles').then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const getArticleByIdApi = (article_id) => {
 console.log(article_id);
return articlesAPI.get(`/articles/${article_id}`).then(({ data }) => {
console.log(data);
return data;
  });
};

<<<<<<< HEAD

export const getComments = (article_id) => {
  return articlesAPI.get(`/articles/${article_id}/comments`).then(({ data }) => {
   
=======
export const getCommentsByArticleIdApi = (article_id) => {
  return articlesAPI.get(`/articles/${article_id}/comments`).then(({ data }) => {   
>>>>>>> 934cd87762efa79f7292862d4e3f68004d414493
   return data;
  })
}

<<<<<<< HEAD

export const patchArticleApi = (article_id, votes) => {
  const patchData = { votes : votes }

return articlesAPI.patch(`/articles/${article_id}`, patchData)
};
=======
>>>>>>> 934cd87762efa79f7292862d4e3f68004d414493
