import { useState } from 'react';
import { postCommentApi } from '../utils/api';

const PostComments = ({ singleArticleID, setComments }) => {
  const [body, setBody] = useState('');
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (body) {
      setIsCommentSubmitted(true);
      setIsDisabled(true);
      postCommentApi( body, singleArticleID).then((commentsFromApi) => {
        setComments((currComments) => [...currComments, commentsFromApi]);
      });
    } else {
      // display error message
    }
  };

  return (
    <section>
      <h2 id="underlined">POST A COMMENT</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Post Comment </label>
        <textarea
          id="comment-box"
          rows="6"
          type="text"
          placeholder="write comment here"
          onChange={(event) => setBody(event.target.value)}
        />      
        <button disabled={isDisabled} type="submit">
          Post
        </button>
        {isCommentSubmitted && <p>Comment submitted successfully</p>}
        {!isCommentSubmitted && <p>Please enter a comment and your username</p>}
      </form>
    </section>
  );
};

export default PostComments;





