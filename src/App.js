import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./compnents/feature/Navbar/Navbar";
import Router from "./router/Router/Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { cartContext } from "./context/cartContext";
import {Footer} from "./compnents/feature/Footer/Footer"
import ProfessionalsProvider from "./context/Context/Context";
import { useState } from "react";
function App() {
  const [cart,setCart]=useState([])
  return (
    <div>
      <BrowserRouter>
        <ProfessionalsProvider>
          <cartContext.Provider value={{cart,setCart}} >
          <Navbar />
          <div className="main">
          <Router />
          </div>
          
          <Footer/>
          </cartContext.Provider>

        </ProfessionalsProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
