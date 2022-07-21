import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import { Home, Resume, Portfolio, Navbar, Contacts } from './components';
// import Particles from './components/Particles';
import Home from "./Components/Home/Home";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Components/Navbar/Navbar";
import Resume from "./Components/Resume/Resume"
const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          
          <Route exact path="/12" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />


          {/* <Navbar /> */}
          {/*  
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contacts} /> */}
        </Routes>
      </Router>

            



    </>
  );
};

export default App;
