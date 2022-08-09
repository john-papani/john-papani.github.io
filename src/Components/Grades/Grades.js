import { Divider, Typography, Grid, Card, CardContent } from "@mui/material";
import React from "react";
import Chart from "../Helpers/Chart";
import { useStyles } from "./gradesstyle";
import AverageComputation from "../Helpers/AverageComputation";
import data from "../../grades_ece_ntua_john.json";

const Grades = () => {
  const classes = useStyles();

  const passedCourses = data.filter(
    (dataItem) =>
      (!isNaN(dataItem.Grade) && dataItem.Grade >= 5) ||
      dataItem.Grade === "Pass"
  ).length;
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{ width: "80%", margin: "auto", paddingBottom: "1%" }}
      >
        <Grid item>
          <Typography variant="h4">Grades</Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Chart />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} marginBottom="4%">
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="h5" className={classes.cardTitle}>Average </Typography>
                      <AverageComputation data={data} />
                    </CardContent>
                  </Card>
                </Grid>
                <Divider />
                <Grid item xs={12}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="h5" className={classes.cardTitle}>
                        Succesfully passed courses
                      </Typography>
                      {passedCourses}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Grades;
