import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { useStyles } from "./projectstyle";
import React from "react";
import covidimg from "../../img/covid_project.jpg";
import gradebookimg from "../../img/gradebook_project.png";
import recipeimg from "../../img/recipe_project.png";
import softengimg from "../../img/softeng_project.jpg";
import energyliveimg from "../../img/energylive22.png";
import iotlivestreamingimg from "../../img/iot-live-streaming.jpg";
import minesweeper from "../../img/minesweeper.png";
import taxi_adv_db from "../../img/taxi_advdb.jpg"
const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={3}
        className={classes.container}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Typography variant="h5">Projects</Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              image={iotlivestreamingimg}
              alt="softeng logo"
            />
            <CardContent>
              <Typography className={classes.cardheader}>
                IoT-Live-streaming
              </Typography>
              <Typography className={classes.cardtext}>
                This project was part of the Analysis and Design of Information
                Systems course at NTUA. (2022-23, Fall Semester).
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    "https://github.com/john-papani/IoT-Live-streaming",
                    "_blank"
                  )
                }
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia component="img" image={minesweeper} alt="softeng logo" />
            <CardContent>
              <Typography className={classes.cardheader}>
                Minesweeper Game with Super Mine
              </Typography>
              <Typography className={classes.cardtext}>
                This project is a Java implementation of the classic Minesweeper
                game, with the added feature of a "super mine".
                <br />
                This project was conducted for the course of Multimedia
                Technology at the 2022-23 Fall semester of the Electrical and
                Computer Engineering School at the National Technical University
                of Athens.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    "https://github.com/john-papani/minesweeper_multimedia_ntua_22",
                    "_blank"
                  )
                }
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              image={taxi_adv_db}
              alt="taxi_adv_db logo"
            />
            <CardContent>
              <Typography className={classes.cardheader}>
                Advanced Topics in Database Systems 2022-2023
              </Typography>
              <Typography className={classes.cardtext}>
                TLC-NYC-Big-Data-Analytics <br /> Semester project for the
                Advanced Database Systems Course @ NTUA ECE 2022-2023
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    "https://github.com/john-papani/Saas-EnergyLive-Ntua",
                    "_blank"
                  )
                }
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              image={energyliveimg}
              alt="softeng logo"
            />
            <CardContent>
              <Typography className={classes.cardheader}>
                EnergyLive2022 2021-2022
              </Typography>
              <Typography className={classes.cardtext}>
                'EnergyLive2022' is a Software as a Service application, where
                the user can see various charts related to Energy consumption
                and generation in European countries.
                <br />
                This project was conducted for the course of Software as a
                Service at the 2021-2022 Spring semester of the Electrical and
                Computer Engineering School at the National Technical University
                of Athens.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    "https://github.com/john-papani/Saas-EnergyLive-Ntua",
                    "_blank"
                  )
                }
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia component="img" image={softengimg} alt="softeng logo" />
            <CardContent>
              <Typography className={classes.cardheader}>
                Software Engineering ECE NTUA 2021-2022
              </Typography>

              <Typography className={classes.cardtext}>
                A web app about interoperability in tolls highways with
                different automatic crossing systems.
                <br />
                This project was conducted for the course of Software
                Engineering at the 2021-2022 Winter semester of the Electrical
                and Computer Engineering School at the National Technical
                University of Athens.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    "https://github.com/john-papani/Softeng-diodia-Ntua",
                    "_blank"
                  )
                }
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              image={gradebookimg}
              alt="gradebook logo"
            />
            <CardContent>
              <Typography className={classes.cardheader}>GradeBook </Typography>
              <Typography className={classes.cardtext}>
                A simple web app where you can calculate the Αverage for your
                university courses.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    "https://github.com/john-papani/Gradebook",
                    "_blank"
                  )
                }
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia component="img" image={covidimg} alt="covid19 logo" />
            <CardContent>
              <Typography className={classes.cardheader}>
                Covid-19 Tracker
              </Typography>
              <Typography className={classes.cardtext}>
                Chart with Cases and Deaths for Every Country.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    "https://github.com/john-papani/covid19-tracker",
                    "_blank"
                  )
                }
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              image={recipeimg}
              alt="recipe-treasure logo "
            />
            <CardContent>
              <Typography className={classes.cardheader}>
                Recipe Treasure{" "}
              </Typography>
              <Typography className={classes.cardtext}>
                A simple web app where you can find some delicious recipes from
                all over the world
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    "https://github.com/john-papani/Recipe-Treasure",
                    "_blank"
                  )
                }
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
