import {useState} from 'react';
import { postCommentApi } from '../utils/api';

 

const PostComments = () => {


const [newComment, setNewComment] = useState('');

const handleSubmit = (event) => {
 
  event.preventDefault();

  postCommentApi(newComment).then((fromCommentApi) => {
    setNewComment((currComments) => [...currComments, fromCommentApi])
   
  })
  

return (
  <section>
    <form onSubmit={handleSubmit} className='new Comment'>
    <label htmlFor='new Comment'>Post a Comment</label>
    <textarea
    id='new Comment'
    value={newComment}
    onChange={(event) => setNewComment(event.target.value)}
    ></textarea>
    <button>Post</button>
  </form>
 
  </section>
)

}
}

export default PostComments;

