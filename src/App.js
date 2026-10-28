import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import CssBaseline from "@mui/material/CssBaseline";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const updatePointer = () => setHasFinePointer(pointerQuery.matches);
    updatePointer();
    pointerQuery.addEventListener?.("change", updatePointer);
    return () => pointerQuery.removeEventListener?.("change", updatePointer);
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
        {hasFinePointer && (
          <AnimatedCursor
            innerSize={8}
            outerSize={32}
            innerScale={0.7}
            outerScale={0.65}
            outerAlpha={0.25}
            innerStyle={{ backgroundColor: "var(--color-accent)" }}
            outerStyle={{ border: "2px solid var(--color-accent)" }}
            clickables={["a", "button", "input", "select", "textarea", "label[for]"]}
          />
        )}
      </Router>
    </>
  );
};

export default App;
