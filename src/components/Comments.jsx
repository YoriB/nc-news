import {useEffect, useState} from 'react';
import '../App.css';
import { getCommentsByArticleIdApi } from '../utils/api';

const Comments =({singleArticleID}) => {
  
  const [comments, setComments] = useState([]);
  

  useEffect(() => {
    if (singleArticleID) {
    getCommentsByArticleIdApi(singleArticleID).then((CommentsFromArticleById) => {     
      setComments(CommentsFromArticleById);    
  });
}
},[]);
  
  return (
<section>
<h2 id="underlined">COMMENTS SECTION</h2>

<ul className="">
      {comments.map((comment) => {
return (
  <li className = "comment-box" key={comment.comment_id}>
<p>{comment.author}</p>
<p>{comment.body}</p>
<p>{comment.created_at}</p>

<button>Like</button><span> {comment.votes} </span><button>Unlike</button>
</li>
)
})}
</ul>   
        
</section>
  )
}

export default Comments;