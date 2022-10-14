import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./compnents/feature/Navbar/Navbar";
import Router from "./router/Router/Router";
import 'bootstrap/dist/css/bootstrap.min.css';


import ProfessionalsProvider from "./context/Context/Context";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ProfessionalsProvider>
          <Navbar />
          <Router />
        </ProfessionalsProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
