import axios from 'axios';

const articlesAPI = axios.create({
  baseURL : 'https://yoris-nc-news.onrender.com/api/'
})


export const getArticlesApi = () => {
  return articlesAPI.get('/articles').then(({data}) => {
    return data;
  })

};












