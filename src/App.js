import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import CatNav from './components/CatNav/CatNav';
import Header from "./components/Header/Header"
import MainComponent from './components/MainComponent';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CatNav></CatNav>
      <Routes>
        <Route path="/" Component={MainComponent}/>
        <Route path='/Cart' Component={Cart}/>
      </Routes>
    </div>
  );
}

export default App;
