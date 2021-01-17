
import './App.css';
import Companies from './Companies';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <header>
      <br/>
      PCS Stock Ticker
    </header>

   <Companies />
    
    </>
  );
}

export default App;
