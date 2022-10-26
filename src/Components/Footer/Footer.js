import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { useStyles } from "./footerstyle";
const Footer = (props) => {
  const { businessProfile } = props;
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={4}
        textAlign="center"
        sx={{
          padding: "1% 4% 1% 4%",
          "@media(max-width:780px)": {
            padding: "4% 4% 1% 4%",
          },
        }}
      >
        <Grid item xs={12} sx={{ display: businessProfile ? "none" : "auto" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={4}
            textAlign="center"
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                "@media(max-width:780px)": {
                  paddingLeft: "30%",
                },
              }}
            >
              <Paper className={classes.cardquotes} elevation={23}>
                <Typography variant="subtitle2">
                  “Ποτέ μην αναβάλεις για αύριο κάτι που μπορείς να κάνεις
                  σήμερα”
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.cardquotes} elevation={23}>
                <Typography variant="subtitle2">
                  “Αν δεν σου αρέσει κατι άλλαξε το!”
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.cardquotes} elevation={23}>
                <Typography variant="subtitle2">
                  “Μην μετανιώνεις για πράγματα που έκανες, αλλά για πράγματα
                  που δεν έκανες”
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {businessProfile ? (
            ""
          ) : (
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Made with ❤️ by
            </Typography>
          )}
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            © Ioannis Papanikolaou
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
