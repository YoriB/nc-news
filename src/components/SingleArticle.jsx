import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByIdApi } from '../utils/api';
import {Link} from 'react-router-dom';
import Comments from './Comments';
import Votes from './Votes';
const dayjs = require('dayjs')


const SingleArticle = () => {  
const {article_id}  = useParams()
  const [singleArticle, setSingleArticle] = useState({});

<<<<<<< HEAD
  useEffect(() => {   
     
  getArticleByIdApi(article_id).then((articleFromApiById) => {   
    setSingleArticle(articleFromApiById);     
    });
  },[article_id]);
  
const date = dayjs(singleArticle.created_at).format('MMMM DD YYYY, hh:mm:ss a');
=======
  useEffect(() => {      
  getArticleByIdApi(article_id).then((articleFromApiById) => {     
        setSingleArticle(articleFromApiById);   
     
    });  
  },[]);
>>>>>>> 934cd87762efa79f7292862d4e3f68004d414493


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
<<<<<<< HEAD
  <p>{date}</p>
  <p id='body-paragraph'> <Link to={`/articles/${singleArticle.article_id}/comments`}>Comments</Link></p> 



<Votes votes={singleArticle.votes}/>
=======
  <p>{singleArticle.created_at}</p>

  <p id='body-paragraph'> <Link to={`/articles/${singleArticle.article_id}/comments`}>Comments</Link></p>
 
<p> Likes : {singleArticle.votes}</p>
<button>Like</button>

>>>>>>> 934cd87762efa79f7292862d4e3f68004d414493
<Comments singleArticleID={article_id} />
  </section>
 );
};

export default SingleArticle;
