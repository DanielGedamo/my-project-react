import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './compnents/feature/Navbar/Navbar';
import Router from './router/Router/Router';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Router/>


      </BrowserRouter>
    </div>
  );
}
export default App;
