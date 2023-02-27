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
return articlesAPI.get(`/articles/${article_id}/comments`).then(({ data }) => {   
  return data;
  })
}


export const patchArticleApi = (id, votes) => {  
return articlesAPI.patch(`/articles/${id}`, { inc_votes : votes }).then(data => {
return data.data;
});
}

export const getTopicsApi = (topics) => {
  return articlesAPI.get(`/topics`).then(({ data }) => {
  return data  
})
}


export const getSortApi = (sortBy, ASC, comment_count) => {
  return articlesAPI.get(`/articles`, {params: {sort_by: sortBy, order : ASC, comment_count : comment_count}}).then(({ data }) => {
  
    return data
  })
}
