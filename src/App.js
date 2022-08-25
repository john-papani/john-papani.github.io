import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Particles from './components/Particles';
import About from "./Components/About/About"
import Home from "./Components/Home/Home";
import CssBaseline from "@mui/material/CssBaseline";
import Splash from "./Components/Splash/Splash";
const App = () => {
  const [visited, setVisited] = useState(sessionStorage.getItem("visited"));
  const update = () => {
    setVisited(sessionStorage.getItem("visited"));
  };

  if (visited) {
    return (
      <>
       <CssBaseline />
    <Router basename={process.env.PUBLIC_URL}>
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/home" element={<Home />} />
           <Route path="/about" element={<About />} />

           
         </Routes>
       </Router>
      </>
    );
  } else {
    return (
      <>
        <CssBaseline />
        <Splash update={update} />
      </>
    );
  }

  // return (
  //   <>
  //     <CssBaseline />
  //     <Router>
  //       <Routes>
  //         <Route exact path="/" element={<Home />} />
  //         <Route exact path="/home" element={<Home />} />
  //         <Route path="/resume" element={<Resume />} />

  //         {/* <Navbar /> */}
  //         {/*
  //           <Route path="/resume" component={Resume} />
  //           <Route path="/portfolio" component={Portfolio} />
  //           <Route path="/contact" component={Contacts} /> */}
  //       </Routes>
  //     </Router>
  //   </>
  // );
};

export default App;
