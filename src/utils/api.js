import axios from 'axios';

const articlesAPI = axios.create({
  baseURL: 'https://yoris-nc-news.onrender.com/api',
});

export const getArticlesApi = () => {
  return articlesAPI.get('/articles').then(({ data }) => {
    return data;
  });
};

export const getArticleByIdApi = (article_id) => {
  return articlesAPI.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getComments = (article_id) => {
  return articlesAPI
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const patchArticleApi = (article_id, votes) => {
  return articlesAPI
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then((data) => {
      return data.data;
    });
};



export const postCommentApi = (body, singleArticleID) => {
  const newComment = {
      username: 'grumpy19',
      body: body,
    }
  ;
  return articlesAPI.post(`/articles/${singleArticleID}/comments`, newComment);
};


// import { useState, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import { postNewComment } from "../utils/api";

// const CommentsAdder = () => {
// const location = useLocation();
// const [message, setMessage] = useState("");
// let show = false;
// const { singleArticle } = location.state;

// const inputRef = useRef();

// function handleSubmit(e) {
// e.preventDefault();
// postNewComment(
// inputRef.current.value,
// singleArticle.author,
// singleArticle.article_id
// ).then(() => {
// setMessage(
// `Your comment has been added to this article: ${singleArticle.title}!`
// );
// show = true;
// });
// }
// return (
// <>
// <div>{!show ? message : null}</div>
// <div className="container">
// <div className="row" style={{ padding: "5px" }}>
// <h6>Add Comment</h6>
// <br />
// </div>
// <div className="row">
// <div className="col-2"></div>
// <div className="col-8">
// <form>
// <div className="form-outline mb-2">
// <input
// style={{
// fontSize: "12px",
// fontWeight: "bold",
// padding: "5px",
// textAlign: "center",
// }}
// type="text"
// readOnly
// value={singleArticle.title}
// id="form4Example1"
// className="form-control input-lg"
// />
// </div>

// <div className="form-outline mb-4">
// <textarea
// className="form-control"
// id="msg"
// rows="6"
// ref={inputRef}
// ></textarea>
// <br />
// <button
// className="btn btn-primary btn-block mb-2"
// onClick={handleSubmit}
// >
// Send
// </button>
// </div>
// </form>
// </div>
// </div>
// </div>
// </>
// );
// };

