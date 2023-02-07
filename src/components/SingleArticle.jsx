
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const SingleArticle = () => {
  const {article_id} = useParams();
  const [singleArticle, setSingleArticle] = useState({});

  useEffect(()=> {

},[])




return (
  <section>SingleArticle</section>
)
}

export default SingleArticle;