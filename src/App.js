import logo from './logo.svg';
import './App.css';
import WordForm from './components/WordForm';
import Header from './components/Header';
import Lower from './components/Lower';
function App() {
  return (
    <div className="App">
      <Header/>
      <WordForm/>
      <Lower/>
    </div>
  );
}

export default App;
