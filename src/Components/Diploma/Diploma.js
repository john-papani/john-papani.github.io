import React from "react";
import { useStyles } from "./diplomaStyle";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import DiplomaText from "./DiplomaText";

const Diploma = ({ isPhone }) => {
  const classes = useStyles();

  return (
    <div id="diploma">
      <Grid container spacing={2} className={classes.diplomacontainer}>
        <Grid item xs={12}>
          <Typography variant="h5">Diploma Thesis</Typography>
        </Grid>
        <Grid
          container
          width={isPhone.isPhone ? "85%" : "100%"}
          alignItems="center"
          margin="auto"
          marginTop={isPhone.isPhone ? "2%" : "0"}
          padding="1%"
          textAlign="justify"
        >
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <DiplomaText className={classes.maintext} isPhone={isPhone} />
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              paddingTop: isPhone.isPhone ? "100px" : "0",
              paddingBottom: isPhone.isPhone ? "100px" : "0",
              paddingLeft: isPhone.isPhone ? "0" : "100px",
            }}
          >
            <img
              src="https://github.com/john-papani/diploma/blob/master/greek_parliament_picture.png?raw=true"
              alt="diploma"
              className="w-[85%] md:w-full mx-auto h-[100%]"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Diploma;
