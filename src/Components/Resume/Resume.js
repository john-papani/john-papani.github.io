import react from "react";
// import { useStyles } from "./resumeStyle";
import { Typography, Box } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import Navbar from "../Navbar/Navbar";
const Resume = () => {
  // const classes = useStyles();
  return (
    <>
     <Navbar/>
      <Box>
        <Timeline position="rigth">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Typography variant="h4">2018</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quas ipsa, laudantium totam perferendis possimus voluptatibus
                tenetur. Quasi voluptatibus, nam vitae eaque ad, officia
                laboriosam repudiandae, rerum necessitatibus nisi mollitia
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Typography variant="h4">2019</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <Typography variant="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quas ipsa, laudantium totam perferendis possimus voluptatibus
                tenetur. Quasi voluptatibus, nam vitae eaque ad, officia
                laboriosam repudiandae, rerum necessitatibus nisi mollitia
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Typography variant="h4">2020</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <Typography variant="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quas ipsa, laudantium totam perferendis possimus voluptatibus
                tenetur. Quasi voluptatibus, nam vitae eaque ad, officia
                laboriosam repudiandae, rerum necessitatibus nisi mollitia
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Typography variant="h4">2021</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <Typography variant="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quas ipsa, laudantium totam perferendis possimus voluptatibus
                tenetur. Quasi voluptatibus, nam vitae eaque ad, officia
                laboriosam repudiandae, rerum necessitatibus nisi mollitia
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>  
    </>
  );
};

export default Resume;
