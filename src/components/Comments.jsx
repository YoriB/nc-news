import {useEffect, useState} from 'react';
import '../App.css';
import { getComments, deleteCommentApi} from '../utils/api';
const dayjs = require('dayjs')

const Comments =({singleArticleID}) => {
  console.log(singleArticleID)
  
  const [comments, setComments] = useState([]);
  const [deleteComment, setDeleteComment] = useState(false);

  useEffect(() => {
    if (singleArticleID) {
    getComments(singleArticleID).then((CommentsFromArticle) => {     
      setComments(CommentsFromArticle);    
  });
}
},[]);
const handleDelete = (comment_id) => { 
  
  const newComments = comments.filter(comment => comment.comment_id !== comment_id)  
 
    deleteCommentApi(comment_id).setDeletedComment(newComments)
    setDeleteComment(newComments);  
    console.log(deleteComment);
   
 }

  
  return (
<section>
<h2 id="underlined">COMMENTS SECTION</h2>

<ul className="">
      {comments.map((comment) => {
          
const date = dayjs(comment.created_at).format('MMMM DD YYYY, hh:mm:ss a');
return (
  <li className = "comment-box" key={comment.comment_id}>
<p>{comment.author}</p>
<p>{comment.body}</p>
<p>{date}</p>

<p>Likes : {comment.votes}</p>
<button onClick={() => handleDelete(comment.comment_id)}>Delete</button>
</li>
)
})}
</ul>   
        
</section>
  )
}

export default Comments;