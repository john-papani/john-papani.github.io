import React, { useState } from "react";
import { useStyles } from "./aboutStyle";
import { Typography, Box, Divider, Button, Modal, Grid } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import BioCV from "./BioCV";
const About = () => {
  const [numPages, setNumPages] = useState(null);

  const [openmodal, setOpenmodal] = useState(false);
  const handleOpenModal = () => setOpenmodal(true);
  const handleCloseModal = () => setOpenmodal(false);
  const downloadCV = () => {
    console.log("as");
    var link = document.createElement("a");
    link.href = "cv.jpg";
    link.download = "cv.jpg";
    console.log(link);
    link.dispatchEvent(new MouseEvent("click"));
  };
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const classes = useStyles();
  return (
    <>
      <BioCV />
      <Divider />
      <Box>
        <Timeline position="rigth">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Typography variant="h5">2018 - now</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>
                Undergraduate Student School of Electrical and Computer
                Engineering, National Technical University Of Athens
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Typography variant="h5">2015 – 2018</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>
                High school graduate [Grade: Excellent 19,1]
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <Divider />
        <div>
          <Typography variant="h5" sx={{ width: "80%", margin: "auto" }}>
            Languages and Tools:
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{ width: "80%", margin: "auto", paddingBottom: "1%" }}
          >
            <Grid item xs={3} md={1}>
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a
                href="https://www.cprogramming.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                  alt="c"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a
                href="https://www.chartjs.org"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.chartjs.org/media/logo-title.svg"
                  alt="chartjs"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a
                href="https://www.w3schools.com/cpp/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                  alt="cplusplus"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a
                href="https://www.w3schools.com/cs/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                  alt="csharp"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a
                href="https://dotnet.microsoft.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
                  alt="dotnet"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a href="https://heroku.com" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
                  alt="heroku"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                  alt="linux"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a
                href="https://www.mathworks.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
                  alt="matlab"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a href="https://www.php.net" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                  alt="php"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a href="https://postman.com" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
            <Grid item xs={3} md={1}>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  width="40"
                  height="40"
                />
              </a>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default About;
