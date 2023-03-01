import { useEffect, useState } from 'react';
import '../App.css';
import { getComments } from '../utils/api';
import { deleteCommentApi } from '../utils/api';


const dayjs = require('dayjs');

const Comments = ({ singleArticleID, currentUser}) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true);
  const [deletedCommentIds, setDeletedCommentIds] = useState([]);

  useEffect(() => {
    if (singleArticleID) {
      getComments(singleArticleID).then((commentsFromArticle) => {
        setComments(commentsFromArticle);
      });
    }
  }, [singleArticleID]);



  const handleDelete = (comment_id, author) => {
    if (author !== currentUser) {
      alert("You can't delete other users' comments.");
      return;
    }

    if (deletedCommentIds.includes(comment_id)) {
      alert('The comment is already being deleted. Please wait...');
      return;
    }

    const newComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );

    setDeletedCommentIds([...deletedCommentIds, comment_id]);

    deleteCommentApi(comment_id).then(() => {      
      setDeletedCommentIds(deletedCommentIds.filter((id) => id !== comment_id));
      setComments(newComments);
      alert('The comment has been deleted.');
    });
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <section>
      <h3 id="underlined">COMMENTS SECTION</h3>

      {comments.length > 0 && (
        <button className="comments-button" onClick={toggleComments}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
      )}

      {showComments && comments.length > 0 && (
        <ul className="">
          {comments.map((comment) => {
            const date = dayjs(comment.created_at).format(
              'MMMM DD YYYY, hh:mm:ss a'
            );
            return (
              <li className="comment-box" key={comment.comment_id}>
                <p>Commented by : {comment.author}</p>
                <p>{comment.body}</p>
                <p>Posted on : {date}</p>
                <p>Likes : {comment.votes}</p>

                {currentUser === comment.author && (
                  <button onClick={() => handleDelete(comment.comment_id, comment.author)}>
                    Delete
                  </button>
                )}

                {deletedCommentIds.includes(comment.comment_id) && (
                  <p style={{ color: 'red' }}>Deleting...</p>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {comments.length === 0 && <p>No comments yet!</p>}
    </section>
  );
};

export default Comments;
