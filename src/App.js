import './App.css';
import CatNav from './components/CatNav/CatNav';
import Header from "./components/Header/Header"
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CatNav></CatNav>
      <MainComponent></MainComponent>
    </div>
  );
}

export default App;
