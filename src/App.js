import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./compnents/feature/Navbar/Navbar";
import Router from "./router/Router/Router";
import Footer from "./compnents/feature/Footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { cartContext } from "./context/cartContext";

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
          <Router />
          </cartContext.Provider>

          {/* <Footer/> */}
        </ProfessionalsProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
