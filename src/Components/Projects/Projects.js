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

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h4">Projects</Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              image="https://raw.githubusercontent.com/john-papani/Softeng-diodia-Ntua/master/frontend/public/img/aboutlogo.jpg"
              alt="softeng logo"
            />
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
              image="https://raw.githubusercontent.com/john-papani/Gradebook/master/frontend/src/img/home_page.png"
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
                onClick={() => window.open("https://github.com/john-papani/Gradebook", "_blank")}
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
              image="https://raw.githubusercontent.com/john-papani/covid19-tracker/master/covid19-tracker-react/src/images/homescreen.jpg"
              alt="covid19 logo"
            />
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
                onClick={() => window.open("https://github.com/john-papani/covid19-tracker", "_blank")}
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
              image="https://raw.githubusercontent.com/john-papani/Recipe-Treasure/master/frontend/src/img/homepage.png"
              alt="recipe-treasure logo "
            />
            <CardContent>
              <Typography className={classes.cardheader}>Recipe Treasure </Typography>
              <Typography className={classes.cardtext}>
                A simple web app where you can find some delicious recipes from
                all over the world
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => window.open("https://github.com/john-papani/Recipe-Treasure", "_blank")}
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
