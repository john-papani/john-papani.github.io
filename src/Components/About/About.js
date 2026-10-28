import { Card, CardContent, Grid, Button } from "@mui/material";
import React from "react";
import { useStyles } from "./aboutStyle";

const About = () => {
  const classes = useStyles();

  return (
    <section id="about" aria-labelledby="about-heading">
      <Grid container spacing={2} className={classes.aboutcontainer}>
        <h2 id="about-heading" className="section-title">
          About
        </h2>
        <Grid container width="100%" maxWidth="820px" margin="0 auto" padding="0 1rem">
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <div className={classes.maintext}>
                  <p>
                    I'm <b>Ioannis Papanikolaou</b>, a Full Stack Developer at{" "}
                    <b>Mitsis Group</b> and an Electrical &amp; Computer Engineering
                    graduate from <b>NTUA</b>.
                  </p>
                  <p className="mt-4">
                    I build web applications, APIs, and internal tools with React,
                    Next.js, TypeScript, Python, and C#/.NET. My interests include
                    full-stack development, data-driven applications, and Semantic
                    Web technologies.
                  </p>
                  <p className="mt-4">
                    My diploma thesis on Greek parliamentary debates later
                    contributed to a peer-reviewed conference publication.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end mt-4">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--color-accent)",
                      textTransform: "none",
                      fontWeight: 600,
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "var(--color-accent-hover)",
                        boxShadow: "none",
                      },
                    }}
                    onClick={() =>
                      window.open("./papanikolaou_ioannis_cv.pdf", "_blank")
                    }
                  >
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
