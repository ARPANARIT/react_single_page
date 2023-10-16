// import SideNav from "./components/SideNav/nav";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/sidebar";

function App() {
  return (
    <BrowserRouter>
    {/* <div className="main-wrapper"> */}
     
      <SideBar>
      
      {/* <div className="main-container"> */}
        <Routes>
          <Route  exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
        {/* </div>
      </div> */}
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
