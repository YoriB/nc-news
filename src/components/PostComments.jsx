import {useState} from 'react';
import { postCommentApi } from '../utils/api';

 

const PostComments = ({singleArticleID}) => {
  

const [body, setBody] = useState('');
const [buttonDisabled, setButtonDisabled] = useState(false);


const handleSubmit = (event) => {
  setButtonDisabled(true);
  event.preventDefault(); 
  

  postCommentApi(body, singleArticleID)
  setButtonDisabled(false);     
}



return (
  <section>  
  <form onSubmit={handleSubmit}> 
        
        <label htmlFor=' comment'>Post Comment </label>
        <textarea
        id = 'comment'
          type="text"
          placeholder="write comment here"
         
          onChange={(event) => setBody(event.target.value)}
        />     
     <button disabled={buttonDisabled} type='submit'> Post</button>
      </form>
  </section>  
)
}


export default PostComments;

