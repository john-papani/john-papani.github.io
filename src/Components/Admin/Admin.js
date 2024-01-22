import { Typography, Grid, Card, CardHeader, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [viewers, setViewers] = useState("");
  useEffect(() => {
    fetch(
      "https://api.countapi.xyz/get/john-papani.github.io/bec3e21b-8894-4028-a57d-926fdb17d5d3"
    )
      .then((resp) => resp.json())
      .then((data) => setViewers(data.value));
  }, []);
  if (window.prompt("Password") !== "admin") {
    console.log("1");
    window.location.replace("/");
  } else
    return (
      <>
        <Grid container textAlign="center" paddingBottom="5%">
          <Grid item xs={12}>
            <h1>Admin Page</h1>
          </Grid>
          <Grid item xs={12}>
            <h2>Statistics</h2>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Card
            sx={{
              width: "40%",
              margin: "auto",
              textAlign: "center",
              border: "1px solid black",
            }}
          >
            <CardContent>
              <Typography variant="h5">Total Viewers</Typography>
              <Typography variant="h2">
                {viewers && <b>{viewers}</b>}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Typography
          variant="h6"
          sx={{ paddingTop: "20%", textAlign: "center" }}
        >
          © IOANNIS PAPANIKOLAOU
        </Typography>
      </>
    );
};

export default Admin;
