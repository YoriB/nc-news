import { Link } from 'react-router-dom';

const Topics = ({ setTopics }) => {
  const handleListAll = () => setTopics('');
  const handleCooking = () => setTopics('cooking');
  const handleCoding = () => setTopics('coding');
  const handleFootball = () => setTopics('football');

  return (
    <section >
      <button className='header-buttons' onClick={handleListAll}>
        <Link to="/">List All Items </Link>
      </button>
      <button className='header-buttons'onClick={handleCooking}>
        <Link to="/">Cooking</Link>
      </button>
      <button className='header-buttons'onClick={handleFootball}>
        <Link to="/"> Football</Link>
      </button>
      <button className='header-buttons'onClick={handleCoding}>
        <Link to="/"> Coding</Link>
      </button>
    </section>
  );
};

export default Topics;
