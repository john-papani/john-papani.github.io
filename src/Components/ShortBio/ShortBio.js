import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./shortBiostyle";
const ShortBio = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} className={classes.shortbiocontainer}>
        <Grid item xs={12}>
          <Typography variant="h5">About Me </Typography>
        </Grid>
        <Grid
          container
          width="85%"
          alignItems="center"
          margin="auto"
          padding="1%"
          textAlign="justify"
        >
          <Grid item xs={12} sx={{ backgroundColor: "#EEEDE7",borderRadius:'12%' }}>
            <Card>
              <CardContent>
                My name is Ioannis Papanikolaou and I am 22 years old.
                <br />
                In this period of time I am focusing on my studies, since I am
                studying at the National Technical University of Athens in the
                Electrical and Computer Engineering department.
                <br />I live in Ilioupoli, Athens and I plan to become a full
                stack developer. I'm open to new ideas always by making them
                coming in real life with a good team.
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ShortBio;
