import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import { useStyles } from "./projectstyle";
import React, { useState } from "react";
import covidimg from "../../img/covid_project.jpg";
import gradebookimg from "../../img/gradebook_project.png";
import recipeimg from "../../img/recipe_project.png";
import softengimg from "../../img/softeng_project.jpg";
import energyliveimg from "../../img/energylive22.png";
import iotlivestreamingimg from "../../img/iot-live-streaming.jpg";
import minesweeper from "../../img/minesweeper.png";
import taxi_adv_db from "../../img/taxi_advdb.jpg";

const Projects = () => {
  const classes = useStyles();
  const size_md = 3;
  const size_xs = 6;
  const [hoveredCard, setHoveredCard] = useState(null);

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1682685797661-9e0c87f59c60",
      title: "Sky",
    },
    {
      img: "https://images.unsplash.com/photo-1543858710-af0479276bed",
      title: "XMas",
    },
  ];

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

        {itemData.map((item) => (
          <Grid item key={item.img} md={size_md} xs={size_xs}>
            <div
              onMouseEnter={() => setHoveredCard(item.img)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={item.img}
                alt="softeng logo"
                style={{
                  width: "100%",
                  height: "auto",
                  opacity: hoveredCard === item.img ? 0.3 : 1,
                  transition: "0.5s ease",
                  // backfaceVisibility: "hidden",
                }}
                onClick={() => {
                  window.open("https://www.google.com");
                }}
              />
              {hoveredCard === item.img && (
                <div
                  style={{
                    transition: "0.5s ease",
                    opacity: 1,
                    position: "relative",
                    // top: "50%",
                    width: "70%",
                    // right: "10%",
                    transform: "translate(35%, -500%)",
                    msTransform: "translate(-50%, -50%)",
                    textAlign: "center",
                    backgroundColor: "#04AA6D",
                    color: "red",
                    fontSize: "10px",
                    padding: "0px 0px 0px 0px",
                  }}
                >
                  {item.title}
                </div>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
