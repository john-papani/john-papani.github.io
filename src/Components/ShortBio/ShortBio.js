import { Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./shortBiostyle";
const ShortBio = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} className={classes.shortbiocontainer}>
        <Grid item xs={12}>
          <Typography variant="h5">Short Bio</Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.biotext}>Sample text for short Bio</div>
        </Grid>
      </Grid>
    </>
  );
};

export default ShortBio;
