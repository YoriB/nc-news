 import { useState, useEffect } from 'react';
import {getArticlesApi, getSortApi, getTopicsApi} from '../utils/api';
import '../App.css';
import {Link} from 'react-router-dom';
import Topics from './Topics';
const dayjs = require('dayjs');


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState("");
  const [sortValue, setSortValue] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticlesApi(topics, sortValue, order)
      .then((articlesFromApi) => {
        setIsLoading(true);
        setArticles(articlesFromApi);
      })
      .catch((error) => {
        setError('Error fetching articles');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topics, sortValue, order]);

  const handleSorting = (event) => {
    setSortValue(event.target.value);
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  if (isLoading) {
    return <p> LOADING...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const currentDate = dayjs().format('MMMM DD YYYY, hh:mm:ss a');

  return (
    <section>
      <div className="topics-header">
        <h2>{currentDate}</h2>
        <Topics setTopics={setTopics} setOrder={setOrder} setSortValue={setSortValue} />
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

      <h2 id='text-h2'>LIST OF ARTICLES</h2>
      <ul className="article-ul">
        {articles.map((article) => {
          const date = dayjs(article.created_at).format(
            "MMMM DD YYYY, hh:mm:ss a"
          );

          return (
            <li className="article count" key={+article.article_id}>
              <h2>
                <Link className='title-text'
                  to={{
                    pathname: `/articles/${+article.article_id}`,
                    search: `?sort_by=${sortValue}&order=${order}`,
                  }}
                >
                 {article.title}
                </Link>
              </h2>
              <img src={article.article_img_url} alt={article.title}></img>
              <p>Written by : {article.author}</p>
              <p>Comments: {article.comment_count}</p>
              <p className="likes">Likes : {article.votes}</p>
              <p className='date'>Posted on : {date}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Articles;
