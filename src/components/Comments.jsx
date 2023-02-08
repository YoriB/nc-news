// import {useEffect, useState} from 'react';
// import '../App.css';
// import SingleArticle from './SingleArticle';
// import { getCommentsByArticleIdApi } from '../utils/api';

// const Comments =({SingleArticle}) => {
//   const [comments, setComments] = useState([]);


//   const handleSubmit = (event) => {
//     event.preventDefault();
   
//   }

//   useEffect(() => {
//     getCommentsByArticleIdApi().then((CommentFromArticleById) => {     
//       setComments(CommentFromArticleById);
//   });
//   }, [comments]);
  


//   return (
// <section>
// <h2> Add comment </h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add Comment"
//           onChange={(event) => setComments(event.target.value)}
//         />
//          <button> Post</button>
//       </form>
// <p></p>
// </section>

//   )
// }

// export default Comments;