import { useState, useEffect } from "react";
import { getArticlesApi, getSortApi, getTopicsApi } from "../utils/api";
import "../App.css";
import { Link } from "react-router-dom";
import Topics from "./Topics";
const dayjs = require("dayjs");

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState("");
  const [sortValue, setSortValue] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlesApi(topics, sortValue, order).then((articlesFromApi) => {
      setIsLoading(false);
      setArticles(articlesFromApi);
    });

    // if (topics !== "") {
    //   getTopicsApi(topics).then((topicsFromApi) => {
    //     setArticles(topicsFromApi);
    //   });
    // }
  }, [topics, sortValue, order]);

  // getSortApi(sortValue).then(
  //   (articlesFromApi) => {
  //     setArticles(articlesFromApi);
  //   },
  //   [sortValue]
  // );

  const handleSorting = (event) => {
    setSortValue(event.target.value);
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  if (isLoading) {
    return <p> LOADING...</p>;
  }

  return (
    <section>
      <Topics setTopics={setTopics} />
      <label htmlFor="sort-select">Sort by:</label>
      <select value={sortValue} onChange={(event) => handleSorting(event)}>
        <option disabled>sort_by</option>
        <option value="created_at">date</option>
        <option value="votes">votes</option>
        <option value="title">title</option>
      </select>
      <select value={order} onChange={(event) => handleOrder(event)}>
        <option value="DESC">desc</option>
        <option value="ASC">asc</option>
      </select>

      <h2>LIST OF ARTICLES</h2>
      <ul className="">
        {articles.map((article) => {
          const date = dayjs(article.created_at).format(
            "MMMM DD YYYY, hh:mm:ss a"
          );

          return (
            <li className="article count" key={+article.article_id}>
              <h2>
                <Link to={`/articles/${+article.article_id}`}>
                  {article.title}
                </Link>
              </h2>
              <img src={article.article_img_url} alt={article.title}></img>
              <p>
                {article.body.length <= 30
                  ? article.body
                  : article.body
                      .split(" ")
                      .slice(0, 30)
                      .join(" ")
                      .concat("......")}
              </p>
              <p>Comments: {article.comment_count}</p>
              <p> Likes : {article.votes}</p>
              <p>{date}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Articles;
