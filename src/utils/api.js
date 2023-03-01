import axios from 'axios';

const articlesAPI = axios.create({
  baseURL: 'https://yoris-nc-news.onrender.com/api/',
});

export const getArticlesApi = (topics, sortValue, order) => {
  return articlesAPI
    .get('/articles', {
      params: { topic: topics, sort_by: sortValue, order: order },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleByIdApi = (article_id, sort_by, order) => {
  return articlesAPI
    .get(`articles/${article_id}?sort_by=${sort_by}&order=${order}`)
    .then(({ data }) => {
      return data;
    });
};

export const getComments = (article_id) => {
  return articlesAPI
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const patchArticleApi = (article_id, votes) => {
  return articlesAPI
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then((data) => {
      return data.data;
    });
};



export const postCommentApi = (body, singleArticleID) => {
  const newComment = {
      username: 'grumpy19',
      body: body,
    }
  ;
  return articlesAPI.post(`/articles/${singleArticleID}/comments`, newComment).then((data) => {
    return data.data;
  });
};


export const deleteCommentApi = (comment_id) => {
  return articlesAPI.delete(`/comments/${comment_id}`)
 
};
