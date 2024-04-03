import LinearProgress from "@mui/material/LinearProgress";
import { Alert, Divider, Fab, Snackbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import ContactFooter from "../ContactFooter/ContactFooter";
import Navbar from "../Navbar/Navbar";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Projects from "../Projects/Projects";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useStyles } from "./homestyle";
import LanguageTools from "../About/LanguageTools";
import Particle from "../Particle";
import Modal from "../Modal/Modal";
import ProgressIndicator from "../../basic_hooks/progressBar";
import { useSmoothScroll } from "../../basic_hooks/useSmoothScroll";
import About from "../About/About";
import Diploma from "../Diploma/Diploma";
const Home = (isPhone) => {
  const [showScroll, setShowScroll] = useState(false);
  const [openAlert, setOpenAlert] = useState(true);
  // const [messageAlert, setMessageAlert] = useState("");
  // const [severityAlert, setSeverityAlert] = useState("");
  const [businessProfile, setBusinessProfile] = useState(true);
  const classes = useStyles();

  // useEffect(
  //   () =>
  //     fetch(
  //       "https://api.countapi.xyz/hit/john-papani.github.io/bec3e21b-8894-4028-a57d-926fdb17d5d3"
  //     ),
  //   []
  // );

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
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

  useSmoothScroll();

  const [loading, setLoading] = useState(true);
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    const duration = 1500; // Set the total loading time in milliseconds
    const interval = 100; // Update interval for progress in milliseconds
    const steps = duration / interval;

    const updateProgress = (step) => {
      const newProgress = (step / steps) * 100;
      setProgressValue(newProgress);

      if (step < steps) {
        setTimeout(() => updateProgress(step + 1), interval);
      } else {
        setLoading(false);
      }
    };

    // Start the loading simulation after a short delay
    setTimeout(() => updateProgress(1), interval);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "30vw",
        }}
      >
        <LinearProgress
          sx={{
            backgroundColor: "white",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "red",
            },
          }}
          fourColor
          variant="determinate"
          value={progressValue}
        />
      </div>
    );
  }

  return (
    <div className={classes.wholepage}>
      <Modal />
      <div className="scroll-to-top">
        <Navbar
          className={classes.navbar}
          setBusinessProfile={setBusinessProfile}
        />
        <div className={classes.backgif}></div>
        <ProgressIndicator />
        <Particle />

        <PersonalInformation isPhone={isPhone} />
        <Divider sx={{ bgcolor: "white" }} />
        <About isPhone={isPhone} />
        <Divider sx={{ bgcolor: "white" }} />
        <Diploma isPhone={isPhone} />
        <Divider sx={{ bgcolor: "white" }} />
        <Projects />
        <Divider sx={{ bgcolor: "white" }} />
        <Fab size="small" className={classes.ArrowTop} onClick={scrollTop}>
          <KeyboardArrowUpIcon />
        </Fab>

        <Divider sx={{ bgcolor: "white" }} />
        <LanguageTools isPhone={isPhone} />
        <ContactFooter />
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
                <b>johnpapani1@gmail.com</b>
              </i>
            </u>
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};
export default Home;
