import { Card, CardContent, Grid, Typography, Button } from "@mui/material";
import React, { useRef } from "react";
import { useStyles } from "./aboutStyle";

const About = ({ isPhone }) => {
  const classes = useStyles();
  const aboutRef = useRef(null);
  const cvRef = useRef(null);

  const text = `Hello there! Welcome to my personal portfolio website. My name is
<b>Ioannis Papanikolaou</b>, and I’m glad to have you here.
<br/>
<br/>

I’m 25 years old and a graduate of the <b>National Technical University of Athens</b>, where I earned my degree in <b>Electrical and Computer Engineering</b>. 
I have also successfully fulfilled my military service, and I’m now fully focused on my professional career.
<br/>
<br/>
Based in the vibrant city of Athens, in the neighborhood of Ilioupoli, my goal is to grow as a versatile and skilled full-stack developer. 
I enjoy transforming abstract ideas into concrete solutions and constantly exploring new technologies to push boundaries and create meaningful results.

<br/>
<br/>
<b>Collaboration is key to me.</b> I believe that great ideas come to life when passionate individuals work together in a supportive environment. 
If you have an exciting project or an innovative idea you’d like to bring to fruition, I’d love to connect and make it happen!

Feel free to explore my portfolio to learn more about my skills, experiences, and projects.
<br/>`;
  return (
    <div id="about">
      <Grid
        container
        spacing={2}
        className={classes.aboutcontainer}
        ref={aboutRef}
      >
        <p className="text-xl lg:text-3xl text-center italic tracking-wider font-bold py-[1%] m-auto w-[80%]">
          About Me
        </p>
        <Grid
          container
          width="85%"
          alignItems="center"
          margin="auto"
          marginTop="0"
          padding="1%"
          textAlign="justify"
        >
          <Grid
            item
            xs={12}
            md={12}
            // sx={{ backgroundColor: "#EEEDE7", borderRadius: "12%" }}
          >
            <Card>
              <CardContent>
                <div
                  className={classes.maintext}
                  dangerouslySetInnerHTML={{ __html: text }}
                />

                <div className="flex lg:justify-end justify-center ">
                  <Button
                    variant="contained"
                    // color='warning'
                    sx={{
                      backgroundColor: "red",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "red",
                      },
                    }}
                    // onClick={handleOpenModal}
                    onClick={() =>
                      window.open(
                        "https://www.canva.com/design/DAGVIrHLtPw/wrrM0r5TbdjdR36uOQIXKg/view?utm_content=DAGVIrHLtPw&utm_campaign=designshare&utm_medium=link&utm_source=editor",
                        "_blank"
                      )
                    }
                    className={classes.modalbtn}
                  >
                    {" "}
                    <p>Check my CV</p>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
