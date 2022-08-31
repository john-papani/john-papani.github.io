import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import CssBaseline from "@mui/material/CssBaseline";
const App = () => {
  // const [visited, setVisited] = useState(sessionStorage.getItem("visited"));
  // const update = () => {
  //   setVisited(sessionStorage.getItem("visited"));
  // };
  useEffect(
    () =>
      fetch(
        "https://api.countapi.xyz/hit/john-papani.github.io/bec3e21b-8894-4028-a57d-926fdb17d5d3"
      ),
    []
  );
  // if (visited) {
  return (
    <>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
  // } else {
  //   return (
  //     <>
  //       <CssBaseline />
  //       <Splash update={update} />
  //     </>
  //   );
  // }
};

export default App;
