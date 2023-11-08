import { Alert, Divider, Fab, Snackbar } from "@mui/material";
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
import Footer from "../Footer/Footer";
import Particle from "../Particle";
import Modal from "../Modal/Modal";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [openAlert, setOpenAlert] = useState(true);
  // const [messageAlert, setMessageAlert] = useState("");
  // const [severityAlert, setSeverityAlert] = useState("");
  const [businessProfile, setBusinessProfile] = useState(true);
  const classes = useStyles();

  useEffect(
    () =>
      fetch(
        "https://api.countapi.xyz/hit/john-papani.github.io/bec3e21b-8894-4028-a57d-926fdb17d5d3"
      ),
    []
  );

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

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
  return (
    <div className={classes.wholepage}>
      <Modal/>
      <div className="scroll-to-top">
        <Navbar
          className={classes.navbar}
          // setOpenAlert={setOpenAlert}
          // openAlert={openAlert}
          // setMessageAlert={setMessageAlert}
          // setSeverityAlert={setSeverityAlert}
          setBusinessProfile={setBusinessProfile}
        />
        <Particle />
        <PersonalInformation businessProfile={businessProfile} />
        <Divider />
        <ShortBio />
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
        <Contact businessProfile={businessProfile} />
        {/* {businessProfile ? "" : <Divider />} */}
        <Divider />
        <Footer businessProfile={businessProfile} />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={openAlert}
          autoHideDuration={30000}
          onClose={handleCloseAlert}
        >
          <Alert severity="warning" onClose={handleCloseAlert}>
            Send me your feedback at{" "}
            <u>
              <i>
                <b>johnpapan1@gmail.com</b>
              </i>
            </u>
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};
export default Home;
