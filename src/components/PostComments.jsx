import {useState} from 'react';
import { postCommentApi } from '../utils/api';


const PostComments = ({singleArticleID, setComments}) => {

const [body, setBody] = useState('');
const [isCommentSubmitted, setIsCommentSubmitted] = useState();
const [isDisabled, setIsDisabled] = useState(false);

const handleSubmit = (event) => {

event.preventDefault(); 


if (body) {
 
  setIsCommentSubmitted(true);
  setIsDisabled(true);
} else {  
 
}



postCommentApi(body, singleArticleID).then(commentsFromApi => {
  setComments((currComments) => [...currComments, commentsFromApi]); 
 
})
}

return (
<section> 
<form onSubmit={handleSubmit}> 
<label htmlFor=' comment'>Post Comment </label>
<textarea
id = 'comment-box'
rows = '6'
type="text"
placeholder="write comment here"
onChange={(event) => setBody(event.target.value)}
/> 
<button disabled={isDisabled} type="submit">Post</button>
{isCommentSubmitted && <p>Form submitted successfully</p>}
{!isCommentSubmitted && <p>Please enter a comment</p>}

</form>
</section> 
)
}

export default PostComments;


