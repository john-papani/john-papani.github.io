import { Box, Grid, Typography, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";
import Particle from "../Particle";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Projects from "../Projects/Projects";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useStyles } from "./homestyle";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.wholepage}>
      <div className="scroll-to-top">
        <Navbar className={classes.navbar} />
        {/* <Particle />   */}
        <PersonalInformation />
        <Projects />
        <Divider />
        <Contact />
        <Divider />
        <Typography variant="h5" className={classes.footer}>
          Made with ❤️ by Ioannis Papanikolaou
        </Typography>

        {isVisible && (
          <div onClick={scrollToTop}>
            <h3>Go up!</h3>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
