 import {useParams} from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import {getArticles } from '../utils/api';
import axios from 'axios';
import '../App.css';


const Articles = () => { 
  const [articles, setArticles] = useState([]); 
  
    useEffect(() => {
  axios.get(`https://yoris-nc-news.onrender.com/api/articles`)
      .then(({data}) => {       
         return setArticles(data);
      });
    },[])
  
  return (
  <section>
    <h2>LIST OF ARTICLES</h2>
    <ul className="">
      {articles.map((article) => {
return (
  <li className = "articlecount" key={article.article_id}>
    <h3>{article.title}</h3>
    <img src={article.article_img_url} alt={article.title} ></img>     
    <h4>{article.body}</h4>
    <p>Number of Comments: {article.comment_count}</p>
    <p>Likes : {article.votes }</p>
    <button>Like</button>
    </li>
    )
})}
</ul>    
</section>
)
  }

export default Articles;