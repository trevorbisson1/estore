import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import CatNav from './components/CatNav/CatNav';
import Header from "./components/Header/Header"
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CatNav></CatNav>
      <Routes>
        <Route path="/" Component={MainComponent}/>
      </Routes>
    </div>
  );
}

export default App;
