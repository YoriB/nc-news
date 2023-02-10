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
  const postBody = {
    username: 'grumpy19',
    body: body,
  };
  return articlesAPI
    .post(`articles/${singleArticleID}/comments`, postBody)
    .then((data) => {       
      return data;
    })
 
};


// export const postNewComment = (data, user, singleArticleID) => {
//   const newComment = [
//     {
//       username: user,
//       body: data,
//     },
//   ];
//   return articlesAPI.post(`/articles/${singleArticleID}/comments`, newComment);
// };