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

// export const getTopicsApi = (topics) => {
//   return articlesAPI.get(`/topics`).then(({ data }) => {
//   return data  
// })
// }


export const getSortApi = (sort_by) => {
  return articlesAPI.get(`/articles?sort_by=${sort_by}`).then(({ data }) => {  
    return data
  })
}