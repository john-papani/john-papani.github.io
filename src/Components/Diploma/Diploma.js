import React from "react";
import { useStyles } from "./diplomaStyle";
import { Grid, Card, CardContent, Button } from "@mui/material";
import DiplomaText from "./DiplomaText";

const Diploma = ({ isPhone }) => {
  const classes = useStyles();
  const links = [
    {
      label: "View Publication",
      url: "https://doi.org/10.1109/SMAP66932.2025.00009",
    },
    {
      label: "View Thesis",
      url: "https://dspace.lib.ntua.gr/xmlui/handle/123456789/60921",
    },
    { label: "GitHub Repository", url: "https://github.com/john-papani/diploma" },
  ];

  return (
    <div id="diploma">
      <Grid container spacing={2} className={classes.diplomacontainer}>
        <h2 className="section-title">
          Diploma Thesis
        </h2>
        <Grid
          container
          width={isPhone ? "85%" : "100%"}
          alignItems="center"
          margin="auto"
          marginTop={isPhone ? "2%" : "0"}
          padding="1%"
          textAlign="justify"
        >
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <DiplomaText className={classes.maintext} isPhone={isPhone} />
                <div className="flex flex-wrap gap-2 mt-6">
                  {links.map(({ label, url }) => (
                    <Button
                      key={label}
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: "none",
                        backgroundColor: "var(--color-accent)",
                        "&:hover": {
                          backgroundColor: "var(--color-accent-hover)",
                        },
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              paddingTop: isPhone ? "24px" : "0",
              paddingBottom: isPhone ? "24px" : "0",
              paddingLeft: isPhone ? "0" : "32px",
            }}
          >
            <img
              src="https://github.com/john-papani/diploma/blob/master/greek_parliament_picture.png?raw=true"
              alt="Greek Parliament building"
              className="w-[85%] md:w-full mx-auto h-[100%]"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Diploma;
