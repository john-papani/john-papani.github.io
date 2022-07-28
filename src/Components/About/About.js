import React from "react";
import { Typography, Box, Divider } from "@mui/material";
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
import LanguageTools from "./LanguageTools";

const About = () => {
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
        <LanguageTools />
      </Box>
    </>
  );
};

export default About;
