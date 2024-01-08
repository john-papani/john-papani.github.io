import React, { useEffect, useState } from "react";
import "./progressBarcss.css";

const ProgressIndicator = () => {
  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    setProgress(scrolled);
  };

  useEffect(() => {
    const handleScroll = () => {
      calculateProgress();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="progress  z-100">
      <div
        className="progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      ></div>
    </div>
  );
};

export default ProgressIndicator;
