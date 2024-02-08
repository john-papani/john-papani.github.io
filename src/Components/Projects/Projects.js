import { Typography, Grid } from "@mui/material";
import { useStyles } from "./projectstyle";
import React, { useRef } from "react";
import ProjectsCarousel from "./ProjectCarousel/ProjectsCarousel";

const Projects = () => {
  const classes = useStyles();
  return (
    <div id="projects">
      <Grid
        container
        spacing={3}
        className={classes.container}
        direction="row"
        justifyContent="center"
        // alignItems="flex-start"
        alignItems="stretch"
      >
        <Grid item xs={12} className="pb-[20px] lg:pb-0">
          <Typography variant="h5">Projects</Typography>
        </Grid>
        <ProjectsCarousel />
      </Grid>
    </div>
  );
};

export default Projects;
