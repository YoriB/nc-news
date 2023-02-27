import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByIdApi } from '../utils/api';
import Comments from './Comments';
import Votes from './Votes';
import Topics from './Topics';

const dayjs = require('dayjs');

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [sortValue, setSortValue] = useState('created_at');
  const [order, setOrder] = useState('DESC');
 
  

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const sort_by = searchParams.get('sort_by');
    const order = searchParams.get('order');
  

    if (sort_by) {
      setSortValue(sort_by);
    }

    if (order) {
      setOrder(order);
    }

    

<<<<<<< HEAD
    getArticleByIdApi(article_id, sortValue, order).then(
      (articleFromApiById) => {
        setSingleArticle(articleFromApiById);
      }
    );
  }, [article_id, sortValue, order]);

  const date = dayjs(singleArticle.created_at).format(
    'MMMM DD YYYY, hh:mm:ss a'
  );
=======
<Votes votes={singleArticle.votes}/>
 
<Votes votes={singleArticle.votes}  singleArticleID = {article_id}/>
>>>>>>> c80940fe7cde757307883cbe01d74d5e3b91d55f

  const handleSorting = (event) => {
    setSortValue(event.target.value);
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };
  const currentDate = dayjs().format('MMMM DD YYYY, hh:mm:ss a');

  return (
    <section>
      <div className="topics-header">
        <h2>{currentDate}</h2> 
      <Topics handleSorting={handleSorting} handleOrder={handleOrder} />
      </div>
      <label className="header-button" htmlFor="sort-select">
        Sort by:
      </label>
      <select
        className="header-button"
        value={sortValue}
        onChange={(event) => handleSorting(event)}
      >
        <option disabled>sort_by</option>
        <option value="created_at">date</option>
        <option value="votes">votes</option>
        <option value="title">title</option>
      </select>
      <label className="header-button" htmlFor="sort-select">
        Order:
      </label>
      <select
        className="header-button"
        value={order}
        onChange={(event) => handleOrder(event)}
      >
        <option value="DESC">desc</option>
        <option value="ASC">asc</option>
      </select>
      <h2>{singleArticle.title}</h2>
      <img src={singleArticle.article_img_url} alt={singleArticle.title}></img>
      <p>{singleArticle.body}</p>
      <p>Written by :{singleArticle.author}</p>
      <p>Posted on : {date}</p>
      {/* <p id="body-paragraph">
        <Link to={`/articles/${singleArticle.article_id}/comments`}>
          Comments
        </Link>
      </p> */}

<<<<<<< HEAD
      <Votes votes={singleArticle.votes} singleArticleID={article_id} />
      <Comments topic={singleArticle.topic} singleArticleID={article_id}  currentUser={singleArticle.author}/>
    </section>
  );
=======

<Votes votes={singleArticle.votes}  singleArticleID = {article_id}/>
<Comments singleArticleID={article_id} />

  </section>
 );
>>>>>>> c80940fe7cde757307883cbe01d74d5e3b91d55f
};


export default SingleArticle;
