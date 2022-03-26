import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import Questions from './components/Quentions/Questions';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Questions></Questions>
    </div>
  );
}

export default App;
