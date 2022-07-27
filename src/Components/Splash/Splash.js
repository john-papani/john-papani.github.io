import React, { useState } from "react";
import LiveTime from "../Helpers/autoreloadTime";
import Particle from "../Particle";
import { Box, Button, Typography, Grid } from "@mui/material";
import {LoadingButton} from "@mui/lab"
import { useStyles } from "./splashstyle";

const Splash = (props) => {
  const classes = useStyles();
  const [unlocked, setUnlocked] = useState(false);
  const [logged, setLogged] = useState(false);

  const unlock = () => {
    setUnlocked(true);
  };

  const login = () => {
    setLogged(true);
    sessionStorage.setItem("visited", true);
    setTimeout(() => {
      props.update();
    }, 2500);
  };
  return (
    <>
      <Particle />
      <Box className={classes.timeBtnBox}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" position="relative" letterSpacing="10px" sx={{fontWeight: "bold"}}>
              {/* Hello to my Portfolio! */}
              Hello My Friend,
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" position="relative" sx={{fontWeight: "bold"}}>
              {/* Hello to my Portfolio! */}
              Welcome To my Home !🏠
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" position="relative" sx={{fontWeight: "bold"}}>
              <LiveTime />
            </Typography>
          </Grid>
          {!logged && (
            <Grid item xs={12}>
              <Button variant="contained" color="error" onClick={() => login()}>
                Click Here To Continue 😁
              </Button>
            </Grid>
          )}
          {logged && (
            <Grid item xs={12}>
              <LoadingButton  variant="contained" loading className={classes.loadingbtn}>
                Click Here to Continue
                </LoadingButton>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Splash;
