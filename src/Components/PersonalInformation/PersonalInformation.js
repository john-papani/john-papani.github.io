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

const PersonalInformation = () => {
  const classes = useStyles();
  return (
    <>
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

        <Typography variant="h3" component="h2">
          Hi there👋, I'm Ioannis Papanikolaou 🧑🏻‍💻
        </Typography>

        <Typography variant="h6">
          Student of ECE NTUA <br />
          And rising Web developer
        </Typography>
        <Chip
          icon={<GitHubIcon style={{ color: "black" }} />}
          label="john-papani"
          component="a"
          href="https://www.github.com/john-papani"
          target="_blank"
          clickable
        ></Chip>
      </Box>
    </>
  );
};
export default PersonalInformation;
