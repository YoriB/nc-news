import { useState } from 'react';
import { patchArticleApi } from '../utils/api';

const Votes = ({ votes, singleArticleID }) => {
  const [voteChange, setVoteChange] = useState(0);

  const incVotes = () => {
    setVoteChange((currChange) => currChange + 1);

    patchArticleApi(singleArticleID, 1);
  };

  const decVotes = () => {
    setVoteChange((currChange) => currChange - 1);

    patchArticleApi(singleArticleID, -1);
  };

  return (
    <div>
      <button disabled={voteChange === 1} onClick={() => incVotes()}>
        Like
      </button>
      <span> Likes : {votes + voteChange}</span>
      <button disabled={voteChange === -1} onClick={() => decVotes()}>
        Unlike
      </button>
    </div>
  );
};
export default Votes;
