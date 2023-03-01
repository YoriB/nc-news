import {useState} from 'react';
import { postCommentApi } from '../utils/api';


const PostComments = ({singleArticleID, setComments}) => {

const [body, setBody] = useState('');
const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
const [isDisabled, setIsDisabled] = useState(false);

const handleSubmit = (event) => {

event.preventDefault(); 

if (body) {
  // form is valid, submit the form 
  setIsCommentSubmitted(true);
  setIsDisabled(true);
} else {
  // form is invalid, display an error message
 
}

postCommentApi(body, singleArticleID).then(commentsFromApi => {
  
  setComments((currComments) => [...currComments, commentsFromApi]).then(() => {  
 
  });
})
}

return (
<section> 
<h2 id="underlined">POST A COMMENT</h2>
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
{isCommentSubmitted && alert('Form submitted successfully')}
{!isCommentSubmitted && <p className='comment-instruction'>Please enter a comment</p>}

</form>
</section> 
)
}

export default PostComments;





