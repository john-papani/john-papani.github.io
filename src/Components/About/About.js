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
      <Divider />
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
      </Box>
    </>
  );
};

export default About;
