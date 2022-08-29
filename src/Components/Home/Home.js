import { Typography, Divider, Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Projects from "../Projects/Projects";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useStyles } from "./homestyle";
import About from "../About/About";
import LanguageTools from "../About/LanguageTools";
import Grades from "../Grades/Grades";
import ShortBio from "../ShortBio/ShortBio";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  // const [openAlert, setOpenAlert] = React.useState(false);
  // const [messageAlert, setMessageAlert] = useState("");
  // const [severityAlert, setSeverityAlert] = useState("");
  const [businessProfile, setBusinessProfile] = useState(false);

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [businessProfile]);
  const classes = useStyles();
  return (
    <div className={classes.wholepage}>
      <div className="scroll-to-top">
        <Navbar
          className={classes.navbar}
          // setOpenAlert={setOpenAlert}
          // openAlert={openAlert}
          // setMessageAlert={setMessageAlert}
          // setSeverityAlert={setSeverityAlert}
          setBusinessProfile={setBusinessProfile}
        />

        <PersonalInformation />
        <Divider />
        <ShortBio/>
        <Divider />
        {businessProfile ? <Projects /> : ""}
        <Divider />

        <Fab
          size="small"
          className={classes.ArrowTop}
          onClick={scrollTop}
          // aria-label="add"
          // style={{ display: showScroll ? "fixed !important" : "none" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>

        <About />
        <Divider />
        {businessProfile ? <LanguageTools /> : ""}
        <Divider />
        <Grades />
        <Divider />
        <Contact />
        <Divider />
        <Typography variant="h5" className={classes.footer}>
          Made with ❤️ by Ioannis Papanikolaou
        </Typography>

      </div>
    </div>
  );
};
export default Home;
