import React, { useState } from "react";
import { useStyles } from "./personalInformationstyle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography, Avatar, Chip } from "@mui/material";
import photoprofilegiannis from "../../img/giannis_2.png";
import photoprofilegiannisnobg from "../../img/giannis_3_no_bg.png";
import Typewriter from "typewriter-effect";
import { MovingComponent } from "react-moving-text";
import { Grid } from "@mui/material";
const PersonalInformation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState("");

  const unhover = () => {
    setOpen("");
  };
  const xs_size = 12;
  const md_size = 6;
  return (
    <div className={classes.personalInformation}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" className={classes.typedContainer}>
        <Grid item xs={xs_size} md={md_size}>
          <Avatar
            onMouseOver={() => setOpen("main")}
            onMouseOut={unhover}
            alt="profile Image"
            src={
              open === "main" ? photoprofilegiannisnobg : photoprofilegiannis
            }
            style={{
              width: 300,
              height: 300,
            }}
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <MovingComponent
            type="fadeInFromLeft"
            duration="300ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <Typography variant="h3" component="h2">
              Hi there👋, I'm Ioannis Papanikolaou 🧑🏻‍💻
            </Typography>
          </MovingComponent>

          <MovingComponent
            type="fadeInFromRight"
            duration="1500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <Typography variant="h6">
              Student of ECE NTUA <br />
            </Typography>
            <Typewriter
              options={{
                strings: ["And rising Web developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </MovingComponent>
          <br />
          <MovingComponent
            type="fadeInFromBottom"
            duration="1500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="baseline"
            >
              <Grid item xs={12}>
                <Chip
                  icon={<LinkedInIcon style={{ color: "white" }} />}
                  label="Ioannis Papanikolaou"
                  style={{ backgroundColor: "#0077b5" }}
                  component="a"
                  href="https://www.linkedin.com/in/ioannis-papanikolaou-1b205a259"
                  target="_blank"
                  clickable
                ></Chip>
              </Grid>
              <Grid item xs={12}>
                <Chip
                  icon={<GitHubIcon style={{ color: "white" }} />}
                  label="john-papani"
                  style={{ backgroundColor: "#24292e", color: "white" }}
                  component="a"
                  href="https://www.github.com/john-papani"
                  target="_blank"
                  clickable
                ></Chip>
              </Grid>
            </Grid>
          </MovingComponent>
        </Grid>
      </Grid>
    </div>
  );
};
export default PersonalInformation;
