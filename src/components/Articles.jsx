 import {useParams} from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import {getArticles } from '../utils/api';
import axios from 'axios';
import '../App.css';
import {Link} from 'react-router-dom';


const Articles = () => { 
  const [articles, setArticles] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);   
  
    useEffect(() => {
      setIsLoading(true)
  axios.get(`https://yoris-nc-news.onrender.com/api/articles`)
      .then(({data}) => {       
         setArticles(data);
         setIsLoading(false);
      });
    },[])

    if (isLoading) {
      return<p>LOADING...</p>;
    }
  
  return (
  <section>
    <h2>LIST OF ARTICLES</h2>
    <ul className="">
      {articles.map((article) => {
return (
  <li className = "articlecount" key={article.article_id}>
    <h2>
      <Link to={`/article/${article.article_id}`}>{article.title}</Link>
    </h2>   
    <img src={article.article_img_url} alt={article.title} ></img>     
    <h3>{(article.body.length <= 20)? article.body : article.body.split(' ').slice(0, 20).join(' ').concat('.....')}</h3>
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