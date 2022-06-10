import './App.css';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route exact path='/' element={ <Homepage/> }/>
      <Route path='/coins/:id' element={ <CoinPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
