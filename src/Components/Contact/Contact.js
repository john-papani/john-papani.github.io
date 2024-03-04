import React from "react";
import { useStyles } from "./constactstyle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Grid, Typography, Button } from "@mui/material";
import ContactForm from "./ContactForm";

const Contact = ({ isPhone }) => {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.contact}>
      <Grid
        container
        direction="column"
        spacing={2}
        className={classes.container}
      >
        <Grid item xs={12}>
          <Typography variant="h5">Get in touch</Typography>
        </Grid>

        <Grid item xs={12} container>
          {!isPhone.isPhone && (
            <Grid item xs={12} md={6}>
              <Grid
                container
                direction="row"
                spacing={3}
                justifyContent="center"
                paddingTop="5%"
                marginLeft="10%"
              >
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
                      window.open(
                        "https://www.github.com/john-papani",
                        "_blank"
                      )
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
                      window.open(
                        "http://www.facebook.com/john.papp.4",
                        "_blank"
                      )
                    }
                    style={{ textTransform: "none" }}
                  >
                    Γιάννης Παπανικολάου
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            {/* <ContactForm /> */}
          </Grid>
          {isPhone.isPhone && (
            <Grid item xs={12} md={6}>
              <div className="flex flex-row w-full justify-center gap-5">
                <GitHubIcon
                  fontSize="large"
                  sx={{ height: "100px" }}
                  onClick={() =>
                    window.open("https://www.github.com/john-papani", "_blank")
                  }
                />
                <LinkedInIcon
                  color="info"
                  fontSize="large"
                  sx={{ height: "100px" }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ioannis-papanikolaou-1b205a259",
                      "_blank"
                    )
                  }
                />
                <AlternateEmailIcon
                  fontSize="large"
                  sx={{ height: "100px" }}
                  onClick={() =>
                    window.open("mailto:johnpapani1@gmail.com", "_blank")
                  }
                />{" "}
                <FacebookIcon
                  color="info"
                  fontSize="large"
                  sx={{ height: "100px" }}
                  onClick={() =>
                    window.open("http://www.facebook.com/john.papp.4", "_blank")
                  }
                />
              </div>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export default Contact;
