 import { useState, useEffect } from 'react';
import {getArticlesApi} from '../utils/api';
import '../App.css';
import {Link} from 'react-router-dom';


const Articles = () => { 
  const [articles, setArticles] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);   
  
    useEffect(() => {    
      getArticlesApi().then((articlesFromApi) => {
        setIsLoading(false);
      setArticles(articlesFromApi);
     
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
  <li className = "article count" key={article.article_id}>
    <h2>
      <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
    </h2>   
    <img src={article.article_img_url} alt={article.title} ></img>     
    <p >{(article.body.length <= 30)? article.body : article.body.split(' ').slice(0, 30).join(' ').concat('......')}</p>
    <p>Comments: {article.comment_count}</p>
    <p> Likes  :  {article.votes }</p>
    <button>Like</button>
    </li>
    )
})}
</ul>    
</section>
)
  }

export default Articles;