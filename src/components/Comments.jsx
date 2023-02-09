import {useEffect, useState} from 'react';
import '../App.css';
import { getComments } from '../utils/api';
const dayjs = require('dayjs')

const Comments =({singleArticleID}) => {
  console.log(singleArticleID)
  
  const [comments, setComments] = useState([]);
  

  useEffect(() => {
    if (singleArticleID) {
    getComments(singleArticleID).then((CommentsFromArticle) => {     
      setComments(CommentsFromArticle);    
  });
}
},[]);


  
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

<button>Like</button><span> {comment.votes} </span><button>Unlike</button>
</li>
)
})}
</ul>   
        
</section>
  )
}

export default Comments;