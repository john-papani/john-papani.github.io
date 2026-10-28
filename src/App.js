import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home isPhone={isPhone} />} />
          <Route path="/home" element={<Home isPhone={isPhone} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
