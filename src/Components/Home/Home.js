import { Box, Grid, Typography, Divider, Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Projects from "../Projects/Projects";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useStyles } from "./homestyle";
import About from "../About/About";
import Terminal from "@nitric/react-animated-term";
import "@nitric/react-animated-term/css/styles.css";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const classes = useStyles();
  return (
    <div className={classes.wholepage}>
      <div className="scroll-to-top">
        <Navbar className={classes.navbar} />

        <PersonalInformation />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
        <Divider />
        <Typography variant="h5" className={classes.footer}>
          Made with ❤️ by Ioannis Papanikolaou
        </Typography>

        <Fab
          size="small"
          className={classes.ArrowTop}
          onClick={scrollTop}
          // aria-label="add"
          style={{ display: showScroll ? "fixed" : "none" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>

        <Divider />
        <About />
      </div>
    </div>
  );
};
export default Home;
