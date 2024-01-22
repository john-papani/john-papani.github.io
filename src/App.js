import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import CssBaseline from "@mui/material/CssBaseline";
import AnimatedCursor from "react-animated-cursor";
const App = () => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsPhone(screenWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home isPhone={isPhone}/>} />
          <Route path="/home" element={<Home isPhone={isPhone}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        {!isPhone && (
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={0.5}
            outerScale={0.5}
            outerAlpha={0.2}
            hasBlendMode={true}
            innerStyle={{
              backgroundColor: "red",
            }}
            outerStyle={{
              border: "3px solid red",
            }}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              "Button",
            ]}
          />
        )}
      </Router>
    </>
  );
};

export default App;
