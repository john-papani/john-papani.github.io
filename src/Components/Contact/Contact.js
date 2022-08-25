import React from "react";
import { useStyles } from "./constactstyle";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Box, Grid, Typography, Button } from "@mui/material";

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" spacing={2} className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h6">Where I live ?</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <iframe
            title="google_maps_location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21016.861970776692!2d23.741884623953265!3d37.934769342812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a196255e3858ed%3A0x400bd2ce2b97980!2sIlioupoli%20Municipality%2C%20Greece!5e0!3m2!1sen!2sus!4v1658954375330!5m2!1sen!2sus"
            className={classes.googleMapIframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5">Contact with me! </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                size="large"
                startIcon={<GitHubIcon />}
                onClick={() =>
                  window.open("https://www.github.com/john-papani", "_blank")
                }
                style={{textTransform: "none"}}
              >
                john-papani
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="warning"
                size="large"
                startIcon={<AlternateEmailIcon />}
                onClick={() =>
                  window.open("mailto:johnpapani1@gmail.com", "_blank")
                }
                style={{textTransform: "none"}}
              >
                johnpapani1@gmail.com
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="info"
                size="large"
                startIcon={<FacebookIcon />}
                onClick={() =>
                  window.open("http://www.facebook.com/john.papp.4", "_blank")
                }
                style={{textTransform: "none"}}
              >
                Γιάννης Παπανικολάου
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                variant="contained"
                size="large"
                startIcon={<InstagramIcon />}
                onClick={() =>
                  window.open("http://www.instagram.com/john.papp", "_blank")
                }
                style={{textTransform: "none"}}
              >
                john.papp
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Contact;
