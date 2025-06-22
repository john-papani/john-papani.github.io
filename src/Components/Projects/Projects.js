import { Grid } from "@mui/material";
import { useStyles } from "./projectstyle";
import React from "react";
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
        <Grid item xs={12}>
          <p className="text-xl lg:text-3xl text-center italic tracking-wider font-bold py-[5%] lg:py-[1%] m-auto w-[90%">
            Projects
          </p>
        </Grid>
        
        <Grid item xs={12}>
          <ProjectsCarousel />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
