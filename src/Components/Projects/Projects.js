import {
  Typography,
  Grid,
} from "@mui/material";
import { useStyles } from "./projectstyle";
import React, { useRef } from "react";

import { useGsapProjectLeftRightReveal } from "../../basic_hooks/gsap";
import { all_projects_list } from "./allprojects";

const Projects = () => {
  const classes = useStyles();
  const size_md_item = 6;
  const size_xs_item = 12;
  const tileprojectRef = useRef(null);

  useGsapProjectLeftRightReveal([tileprojectRef]);
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
          <Typography variant="h5">Projects</Typography>
        </Grid>

        <Grid item xs={12} ref={tileprojectRef} >
          {all_projects_list.map((item) => (
            <Grid
              container
              // direction="row"
              flexDirection={"row"}
              justifyContent={"flex-start"}
              key={item.img}
              className="tile-project"
              alignItems={"center"}
              style={{ border: "1px dotted  red" }}
              align-items="center"
              align-content="flex-start"
              padding="5px"
            >
              <Grid
                item
                md={size_md_item}
                xs={size_xs_item}
                textAlign={window.innerWidth <= 600 ? "center" : "right"}
              >
                <div>
                  <img
                    src={item.img}
                    alt="softeng logo"
                    style={{
                      width: "50%",
                      height: "auto",
                      transition: "0.5s ease",
                      // backfaceVisibility: "hidden",
                    }}
                    onClick={() => {
                      window.open(item.githubLink, "_blank");
                    }}
                  />
                </div>
              </Grid>
              <Grid
                item
                md={size_md_item}
                xs={size_xs_item}
                textAlign={"center"}
                // border={"1px solid blue"}
              >
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
                {/* <Typography variant="body2">{item.te}</Typography> */}

                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="red"
                  style={{ textDecoration: "none" }}
                >
                  <br />
                  <Typography
                    variant="subtitle2"
                    color="red"
                    fontWeight={"bold"}
                  >
                    Github Link
                  </Typography>
                </a>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
