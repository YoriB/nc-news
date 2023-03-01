import { Link } from 'react-router-dom';
import { useState } from 'react';

const Topics = ({ setTopics }) => {
  const [error, setError] = useState(null);

  const handleListAll = () => {
    setTopics('');
    setError(null);
  };

  const handleCooking = () => {
    try {
      setTopics('cooking');
      setError(null);
    } catch (error) {
      setError('Error loading articles for cooking topic.');
    }
  };

  const handleCoding = () => {
    try {
      setTopics('coding');
      setError(null);
    } catch (error) {
      setError('Error loading articles for coding topic.');
    }
  };

  const handleFootball = () => {
    try {
      setTopics('football');
      setError(null);
    } catch (error) {
      setError('Error loading articles for football topic.');
    }
  };

  return (
    <section>
      <button className="header-buttons" onClick={handleListAll}>
        <Link to="/">List All Items</Link>
      </button>
      <button className="header-buttons" onClick={handleCooking}>
        <Link to="/">Cooking</Link>
      </button>
      <button className="header-buttons" onClick={handleFootball}>
        <Link to="/">Football</Link>
      </button>
      <button className="header-buttons" onClick={handleCoding}>
        <Link to="/">Coding</Link>
      </button>
      {error && <p className="error-message">{error}</p>}
    </section>
  );
};

export default Topics;