import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByIdApi } from '../utils/api';
import {Link} from 'react-router-dom';
import Comments from './Comments';
import Votes from './Votes';
import { useNavigate } from 'react-router-dom';
const dayjs = require('dayjs')


const SingleArticle = () => {  
const {article_id}  = useParams()
  const [singleArticle, setSingleArticle] = useState({});

  const navigate = useNavigate();

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
        <button className="btn btn-outline-primary" onClick={(e)=>{navigate('/PostComments',{state:{singleArticle}})} }>Comment</button>
     
  <p>
  {singleArticle.body}
  </p>
  <p>{singleArticle.author}</p>
  <p>{dayjs(singleArticle.created_at).format('MMMM DD YYYY, hh:mm:ss a')}</p>
  <p id='body-paragraph'> <Link to={`/articles/${singleArticle.article_id}/comments`}>Comments</Link></p> 

  

<Votes votes={singleArticle.votes}/>
 
<Votes votes={singleArticle.votes}  singleArticleID = {article_id}/>

<Comments singleArticleID={article_id} singleArticle={singleArticle} />


  </section>
 );
};


export default SingleArticle;
