import React from "react";
import { useStyles } from "./constactstyle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Grid, Typography, Button } from "@mui/material";

const Contact = (props) => {
  const classes = useStyles();
  const { businessProfile } = props;
  return (
    <div id="contact" className={classes.contact}>
      <Grid container direction="row" spacing={2} className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h5">Get in touch</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<LinkedInIcon />}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ioannis-papanikolaou-1b205a259",
                "_blank"
              )
            }
            style={{ textTransform: "none" }}
          >
            Ioannis Papanikolaou
          </Button>
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
            style={{ textTransform: "none" }}
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
            style={{ textTransform: "none" }}
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
            style={{ textTransform: "none" }}
          >
            Γιάννης Παπανικολάου
          </Button>
        </Grid>
        <Grid item>
          {businessProfile ? (
            ""
          ) : (
            <Button
              color="inherit"
              variant="contained"
              size="large"
              startIcon={<InstagramIcon />}
              onClick={() =>
                window.open("http://www.instagram.com/john.papp", "_blank")
              }
              style={{ textTransform: "none" }}
            >
              john.papp
            </Button>
          )}
        </Grid>
      </Grid>

      {/* <Grid item md={12} lg={3}>
        <Grid
          container
          direction="column"
          spacing={3}
          justifyContent="space-around"
          alignItems="flex-end"
        > */}
      {/* <Grid item xs={12}>
              {businessProfile ? (
                <Typography variant="h5">Donate me! </Typography>
              ) : (
                <Typography variant="h5">Donate me! 😁</Typography>
              )}
            </Grid>

            <Grid item>
              <Button
                color="inherit"
                variant="contained"
                size="large"
                startIcon={<PaidIcon />}
                onClick={() =>
                  window.open("https://www.paypal.me/ioannispapani", "_blank")
                }
                style={{ textTransform: "none" }}
              >
                Paypal.me/ioannispapani
              </Button>
            </Grid>

            <Grid item>
              <Button
                color="inherit"
                variant="contained"
                size="large"
                startIcon={<PaymentIcon />}
                onClick={() =>
                  window.open("https://www.revolut.me/ioanni4t68", "_blank")
                }
                style={{ textTransform: "none" }}
              >
                Revolut.me/ioanni4t68
              </Button>
            </Grid> */}
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};
export default Contact;
