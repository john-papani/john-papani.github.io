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
import Diploma from "../Diploma/Diploma";
import WorkExperience from "../WorkExperience/WorkExperience";
import Volunteering from "../Volunteering/Volunteering";
import { useScrollReveal } from "../../basic_hooks/useScrollReveal";

const Home = ({ isPhone }) => {
  const [showScroll, setShowScroll] = useState(false);
  const classes = useStyles();
  const dividerStyle = { bgcolor: "var(--divider-color)" };
  useScrollReveal();

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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[var(--color-dark-soft)]">
        Skip to content
      </a>
      <Navbar />
      <div className={classes.backgif} aria-hidden="true" />
      <Particle />
      <main id="main-content">
        <Hero isPhone={isPhone} />
        <Divider sx={dividerStyle} />
        <div data-reveal className="reveal grid lg:grid-cols-[3fr_2fr] gap-8 items-start w-[min(94%,1200px)] mx-auto">
          <WorkExperience embedded />
          <aside
            className="space-y-8 pb-8 lg:pt-11 lg:pb-6"
            aria-label="Research and core skills"
          >
            <Diploma compact />
            <LanguageTools isPhone={isPhone} compact />
          </aside>
        </div>
        <Divider sx={dividerStyle} />
        <Projects />
        <Divider sx={dividerStyle} />
        <Volunteering />
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
