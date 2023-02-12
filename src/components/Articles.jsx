 import { useState, useEffect } from 'react';
import {getArticlesApi} from '../utils/api';
import '../App.css';
import {Link} from 'react-router-dom';
import Topics from './Topics';
import axios from 'axios'
const dayjs = require('dayjs');



const Articles = () => { 
  const [articles, setArticles] = useState([]); 
  const [topics, setTopics] = useState(''); 
 const [sortValue, setSortValue] = useState('created_at'); 

  const [isLoading, setIsLoading] = useState(true);   
  
    useEffect(() => {    
      getArticlesApi().then((articlesFromApi) => {
        setIsLoading(false);
      setArticles(articlesFromApi);    
      });
    

   if(topics!== ''){
   axios.get(`https://yoris-nc-news.onrender.com/api/articles${topics}`).then(({data}) => {
  
   setArticles(data);  
    })  
  }
},[topics]);  

const handleSorting = (event) => {setSortValue(event.target.value)}
console.log(sortValue)

    if (isLoading) {
      return <p> LOADING...</p>;
    } 

    
return (
  <section>
    <Topics setTopics={setTopics} />

    <select onChange={(event)=> handleSorting(event)}>
      <option disabled>sort_by</option>
      <option value='created_at'>date</option>
      <option value='votes'>votes</option>
      <option value='comment_count'>comment_count</option>

    </select>
  
    <h2>LIST OF ARTICLES</h2>
    <ul className="">
      {articles.map((article) => {
        const date = dayjs(article.created_at).format('MMMM DD YYYY, hh:mm:ss a');
        
return (
  <li className = "article count" key={+article.article_id}>
    <h2>
      <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
    </h2>   
    <img src={article.article_img_url} alt={article.title} ></img>     
    <p >{(article.body.length <= 30)? article.body : article.body.split(' ').slice(0, 30).join(' ').concat('......')}</p>
    <p>Comments: {article.comment_count}</p>
    <p> Likes  :  {article.votes }</p>
    <p>{date}</p>    
    </li>
    )
})}
</ul>    
</section>
)
  }

export default Articles;