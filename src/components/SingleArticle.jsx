import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByIdApi } from '../utils/api';
import {Link} from 'react-router-dom';




const SingleArticle = () => {  
const {article_id}  = useParams();

  const [singleArticle, setSingleArticle] = useState({});

  useEffect(() => {    
  getArticleByIdApi(article_id).then((articleFromApiById) => {    
        setSingleArticle(articleFromApiById);
    });
  },[article_id]);
  

  return (
  <section>
        <h2>
            {singleArticle.title}
        </h2>
        <img
          src={singleArticle.article_img_url}
          alt={singleArticle.title}
        ></img>
  <p>
  {singleArticle.body}
  </p>
  <p>{singleArticle.author}</p>
  <p>{singleArticle.created_at}</p>
  <p id='body-paragraph'> <Link to={`/articles/${singleArticle.article_id}/comments`}>Comments</Link></p>
 
<p> Likes : {singleArticle.votes}</p>
<button>Like</button>

  </section>
 );
};

export default SingleArticle;
