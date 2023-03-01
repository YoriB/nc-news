import { useEffect, useState } from 'react';
import '../App.css';
import { getComments,deleteCommentApi } from '../utils/api';

const dayjs = require('dayjs')

const Comments =({singleArticleID}) => {

  
  const [comments, setComments] = useState([]);

const [deletedComment, setDeletedComment] = useState(comments);


  useEffect(() => {

    if (singleArticleID) {
    getComments(singleArticleID).then((CommentsFromArticle) => {     
      setComments(CommentsFromArticle);    
  });
}
});

  
const deleteComment = (comment_id) => {   
  const newComments = comments.filter(comment => comment.comment_id !== comment_id)  
  setDeletedComment(newComments);  
    deleteCommentApi(comment_id)  
 }

 
  
  return (
<section>
<h2 id="underlined">COMMENTS SECTION</h2>

<ul className="">
      {comments.map((comment) => {
          
const date = dayjs(comment.created_at).format('MMMM DD YYYY, hh:mm:ss a');
return (
  <li className = "comment-box" key={comment.comment_id}>
<p>by : {comment.author}</p>
<p>{comment.body}</p>
<p>posted : {date}</p>

<p>Likes : {comment.votes}</p>
<button onClick={() => deleteComment(comment.comment_id)}>Delete</button>
</li>
)
})}
</ul>   
        
</section>
  )
}

export default Comments;