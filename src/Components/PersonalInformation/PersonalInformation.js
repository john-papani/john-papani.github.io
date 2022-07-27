import React from "react";
import { useStyles } from "./personalInformationstyle";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { green } from "@mui/material/colors";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Box, Grid, Typography, Avatar, Chip } from "@mui/material";
import photoprofilegiannis from "../../img/giannis.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { MovingComponent } from "react-moving-text";
import LiveTime from "../Helpers/autoreloadTime";
const PersonalInformation = () => {
  const classes = useStyles();
  return (
    <div className={classes.personalInformation}>
      <Box className={classes.typedContainer}>
        <Avatar
          // variant={"rounded"}
          alt="profile Image"
          src={photoprofilegiannis}
          style={{
            width: 250,
            height: 250,
          }}
          className={classes.avatar}
        />

        <MovingComponent
          type="fadeInFromLeft"
          duration="1500ms"
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
            And rising Web developer
          </Typography>
        </MovingComponent>

        <MovingComponent
          type="fadeInFromBottom"
          duration="1500ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <Chip
            icon={<GitHubIcon style={{ color: "black" }} />}
            label="john-papani"
            component="a"
            href="https://www.github.com/john-papani"
            target="_blank"
            clickable
          ></Chip>
        </MovingComponent>
      </Box>
    </div>
  );
};
export default PersonalInformation;
