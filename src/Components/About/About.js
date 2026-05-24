import { Card, CardContent, Grid, Typography, Button } from "@mui/material";
import React, { useRef } from "react";
import { useStyles } from "./aboutStyle";

const About = ({ isPhone }) => {
  const classes = useStyles();
  const aboutRef = useRef(null);
  const cvRef = useRef(null);

//   const text = `Hello there! Welcome to my personal portfolio website. My name is
// <b>Ioannis Papanikolaou</b>, and I’m glad to have you here.
// <br/>
// <br/>

// I’m 25 years old and a graduate of the <b>National Technical University of Athens</b>, where I earned my degree in <b>Electrical and Computer Engineering</b>. 
// I have also successfully fulfilled my military service, and I’m now fully focused on my professional career.
// <br/>
// <br/>
// Based in the vibrant city of Athens, in the neighborhood of Ilioupoli, my goal is to grow as a versatile and skilled full-stack developer. 
// I enjoy transforming abstract ideas into concrete solutions and constantly exploring new technologies to push boundaries and create meaningful results.

// <br/>
// <br/>
// <b>Collaboration is key to me.</b> I believe that great ideas come to life when passionate individuals work together in a supportive environment. 
// If you have an exciting project or an innovative idea you’d like to bring to fruition, I’d love to connect and make it happen!

// Feel free to explore my portfolio to learn more about my skills, experiences, and projects.

const text = `
Hi, I’m <b>Ioannis Papanikolaou</b>, a <b>Full Stack Developer</b> and Electrical and Computer Engineering graduate from the <b>National Technical University of Athens</b>.
<br/><br/>

I build modern, responsive, and business-oriented web applications, with experience across <b>React.js</b>, <b>Next.js</b>, <b>JavaScript</b>, <b>Python</b>, <b>Django REST Framework</b>, <b>Flask</b>, <b>Tailwind CSS</b>, <b>SQL</b>, and <b>Git</b>. My work focuses on creating practical digital solutions that are clean, scalable, user-friendly, and aligned with real operational needs.
<br/><br/>

Currently, I develop and maintain <b>internal business applications</b>, <b>RESTful APIs</b>, and <b>reporting tools</b> that support hospitality operations, workflows, and management systems. I enjoy working across both front-end and back-end development, combining thoughtful interface design with reliable functionality and maintainable architecture.
<br/><br/>

My background also includes experience in <b>e-commerce development</b>, <b>WordPress/WooCommerce</b>, technical support, debugging, testing, and collaborative development through <b>GitHub</b>. These experiences have helped me build a practical, problem-solving mindset and a strong understanding of how software supports everyday business processes.
<br/><br/>

Through this portfolio, you can explore my <b>projects</b>, <b>skills</b>, and <b>professional experience</b>. I’m always interested in new challenges, meaningful collaborations, and opportunities to build software that makes a real impact.
`;
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
                      backgroundColor: "#ff3d55",
                      boxShadow: "0 14px 34px rgba(255, 61, 85, 0.22)",
                      "&:hover": {
                        backgroundColor: "#0c0f18",
                        color: "#ff6374",
                      },
                    }}
                    // onClick={handleOpenModal}
                    onClick={() =>
                      window.open(
                        "./papanikolaou_ioannis_cv1.pdf",
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
