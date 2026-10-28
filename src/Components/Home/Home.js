import { Divider, Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import ContactFooter from "../ContactFooter/ContactFooter";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useStyles } from "./homestyle";
import LanguageTools from "../About/LanguageTools";
import Particle from "../Particle";
import ProgressIndicator from "../../basic_hooks/progressBar";
import About from "../About/About";
import Diploma from "../Diploma/Diploma";
import WorkExperience from "../WorkExperience/WorkExperience";
import Volunteering from "../Volunteering/Volunteering";

const Home = ({ isPhone }) => {
  const [showScroll, setShowScroll] = useState(false);
  const classes = useStyles();
  const dividerStyle = { bgcolor: "rgba(255, 255, 255, 0.08)" };

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScrollTop, { passive: true });
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.wholepage}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-black">
        Skip to content
      </a>
      <Navbar />
      <div className={classes.backgif} aria-hidden="true" />
      <Particle />
      <main id="main-content">
        <Hero isPhone={isPhone} />
        <Divider sx={dividerStyle} />
        <About />
        <Divider sx={dividerStyle} />
        <Diploma isPhone={isPhone} />
        <Divider sx={dividerStyle} />
        <WorkExperience />
        <Divider sx={dividerStyle} />
        <Volunteering />
        <Divider sx={dividerStyle} />
        <Projects />
        <Divider sx={dividerStyle} />
        <LanguageTools isPhone={isPhone} />
        <ContactFooter />
      </main>
      <ProgressIndicator />
      {showScroll && (
        <Fab
          size="small"
          className={classes.ArrowTop}
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </div>
  );
};

export default Home;
