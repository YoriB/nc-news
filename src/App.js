import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
   <Header/>  
   <Nav/>
   <Routes>
    <Route path='/' element={<Articles/>}></Route>
    <Route path='/articles' element={<Articles/>}></Route>
   </Routes> 
    </div>
  );
}

export default App;
