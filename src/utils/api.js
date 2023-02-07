import axios from 'axios';

const articlesAPI = axios.create({
  baseURL : 'https://yoris-nc-news.onrender.com/api/'
})


const getArticlesApi = () => {
  return articlesAPI.get('/articles').then(({data}) => {
    return data;
  })

};

export default getArticlesApi;




