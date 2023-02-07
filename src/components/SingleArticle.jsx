import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const SingleArticle = () => {
  const {article_id} = useParams();
  const [singleArticle, setSingleArticle] = useState({});

  useEffect(()=> {
    axios.get(`https://yoris-nc-news.onrender.com/api/articles/${article_id}`)
    .then((data)=> {
  })
},[])




return (
  <section>SingleArticle</section>
)
}

export default SingleArticle;