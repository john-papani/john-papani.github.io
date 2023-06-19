import React from "react";
import { useStyles } from "./personalInformationstyle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box,  Typography, Avatar, Chip } from "@mui/material";
import photoprofilegiannis from "../../img/giannis_1.jpg";

import { MovingComponent } from "react-moving-text";
const PersonalInformation = (props) => {
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
            {/* And rising Web developer */}
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
            icon={<LinkedInIcon style={{ color: "black" }} />}
            label="Ioannis Papanikolaou"
            component="a"
            href="https://www.linkedin.com/in/ioannis-papanikolaou-1b205a259"
            target="_blank"
            clickable
          ></Chip>

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
