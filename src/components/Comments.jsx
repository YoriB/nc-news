import { useEffect, useState } from 'react';
import '../App.css';
import { getComments } from '../utils/api';
import PostComments from './PostComments';

const dayjs = require('dayjs');

const Comments = ({ singleArticleID, singleArticle }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (singleArticleID) {
      getComments(singleArticleID).then((CommentsFromArticle) => {
        setComments(CommentsFromArticle);
      });
    }
  },);

  return (
    <section>
      <PostComments singleArticle={singleArticle}
        singleArticleID={singleArticleID}
        setComments={setComments}
      />
      <h2 id="underlined">COMMENTS SECTION</h2>
      <ul className="key">
        {comments.map((comment) => {         
         
          return (
            <li className="comment-box" key={comment.comment_id}>
              <p>{comment.author}</p>
              <p>{comment.body}</p>
              <p>{dayjs(comment.created_at).format(
            'MMMM DD YYYY, hh:mm:ss a')}</p>
              <button>Like</button>
              <span> {comment.votes} </span>
              <button>Unlike</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
