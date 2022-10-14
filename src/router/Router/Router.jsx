import "./Router.css";
import Home from "../../compnents/feature/pages/Home/Home";
import Category from "../../compnents/feature/pages/Category/Category";
import Registration from "../../compnents/feature/pages/Registration/Registration";
import About from "../../compnents/feature/pages/About/About";
import Contact from "../../compnents/feature/pages/Contact/Contact";
import Login from "../../compnents/feature/pages/login/login";
import ProfessionalsProvider from "../../context/Context/Context";
import {Routes,Route} from "react-router-dom"

function Router() {
  return (
    <div className="router">
      <Routes>
        <Route path="/" element = {<Registration/>}/>
        <Route path="Registration" element = {<Registration/>}/>
        <Route path="Home" element ={<Home/>}/>
        <Route path="category" element = {<ProfessionalsProvider><Category/></ProfessionalsProvider> }/>
        <Route path="About" element = {<About/>}/>
        <Route path="Contact" element = {<Contact/>} />
        <Route path="Login" element = {<Login/>} />
      </Routes>
    </div>
  );
};

export default Router;
