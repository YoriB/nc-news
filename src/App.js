import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import SingleArticle from './components/SingleArticle';
import Topics from './components/Topics';

function App() {
  return (
    <div className="App">
   <Header/>  
   <Nav/>
   <Routes>
    <Route path='/' element={<Articles/>}></Route>
    <Route path='/articles' element={<Articles/>}></Route>
    <Route path="/articles/:article_id" element={<SingleArticle/>}></Route>
    <Route path="/topics/:topics" element={<Topics/>}></Route>

   </Routes> 
    </div>
  );
}

export default App;
