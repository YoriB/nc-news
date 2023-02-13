
import {Link} from 'react-router-dom';



const Topics = ({setTopics}) => {  

  const handleListAll = () => setTopics('')
  const handleCooking = () => setTopics('?topic=cooking')
  const handleCoding = () => setTopics('?topic=coding')
  const handleFootball = () => setTopics('?topic=football')


  return (
    <section>
      <button onClick={handleListAll}>
        <Link to="/">List All Items </Link>
      </button>
      <button onClick={handleCooking}>
        <Link to="/">Cooking</Link>
      </button>
      <button onClick={handleFootball}>
        <Link to="/"> Football</Link>
      </button>
      <button onClick={handleCoding}>
        <Link to="/"> Coding</Link>
      </button>
    </section>
  );
};

export default Topics;





















































