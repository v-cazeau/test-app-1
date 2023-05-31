import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.scss';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
    </Routes>
   </BrowserRouter>
   </>
  );
};

export default App;
