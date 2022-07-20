import React from "react";
import { useStyles } from "./constactstyle";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Box, Grid, Typography } from "@mui/material";

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={1}
        direction="column"
        className={classes.container}
      >
        <Grid item xs={12}>
          <Typography variant="h5">Contact with me! </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <GitHubIcon
                fontSize="large"
                className={classes.icon}
                onClick={() => window.open("http://www.google.com", "_blank")}
                baseClassName="john-papani"
              />
            </Grid>
            <Grid item>
              <Typography className={classes.iconlabel}>john-papani</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <AlternateEmailIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography className={classes.iconlabel}>
                johnpapani1@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <FacebookIcon
                fontSize="large"
                className={classes.icon}
                onClick={() => window.open("http://www.google.com", "_blank")}
              />
            </Grid>
            <Grid item>
              <Typography className={classes.iconlabel}>
                Γιάννης Παπανικολάου
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <InstagramIcon
                fontSize="large"
                className={classes.icon}
                onClick={() => window.open("http://www.google.com", "_blank")}
              />
            </Grid>
            <Grid item>
              <Typography className={classes.iconlabel}>
               john.papp
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Contact;
