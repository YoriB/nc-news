import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByIdApi } from '../utils/api';

const SingleArticle = () => {
  const { article_id } = useParams();

  const [singleArticle, setSingleArticle] = useState({});

  useEffect(() => {
    getArticleByIdApi(article_id).then((articleFromApiById) => {
      setSingleArticle(articleFromApiById);
    });
  }, [article_id]);
  console.log(singleArticle.article_id);

  return (
  <section>
        <h2>
            {singleArticle.title}
        </h2>
        <img
          src={singleArticle.article_img_url}
          alt={singleArticle.title}
        ></img>
        <p>
          {singleArticle.body.length <= 30
            ? singleArticle.body
            : singleArticle.body
                .split(' ')
                .slice(0, 30)
                .join(' ')
                .concat('......')}
        </p>
        <p>Comments: {singleArticle.comment_count}</p>
        <p> Likes : {singleArticle.votes}</p>
        <button>Like</button>

  </section>
 );
};

export default SingleArticle;
