import {useEffect, useState} from 'react';
import '../App.css';


import { getCommentsByArticleIdApi } from '../utils/api';

const Comments =({singleArticleID}) => {
  
  const [comments, setComments] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
   
  }

  useEffect(() => {
    getCommentsByArticleIdApi(singleArticleID).then((CommentFromArticleById) => {     
      setComments(CommentFromArticleById);
      console.log(comments);
  });
  }, []);
  


  return (
<section>
<h2> Add comment </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Comment"
          onChange={(event) => setComments(event.target.value)}
        />
         <button> Post</button>
      </form>
<p></p>
</section>

  )
}

export default Comments;