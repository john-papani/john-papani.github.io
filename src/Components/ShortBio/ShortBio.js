import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useStyles } from "./shortBiostyle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BioCV from "../About/BioCV";

const ShortBio = () => {
  const classes = useStyles();
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#2A2A2A",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  const text = `Hello there! Welcome to my personal portfolio website. My name is
        <b> Ioannis Papanikolaou</b>, and I'm thrilled to have you here.
        At the age of 23, I'm concentrating on my studies at the
        prestigious National Technical University of Athens, where I'm
        pursuing a degree in<b> Electrical and Computer Engineering</b>.
        <br />
        <br />
        My home is the vibrant city of Athens, specifically the charming
        neighborhood of Ilioupoli. As I progress through my academic
        career, my ultimate goal is to become a versatile and skilled
        full stack developer (or not). I get a lot of satisfaction from
        transforming abstract ideas into concrete solutions, and I'm
        always up for exploring new ideas and pushing boundaries.
        <br />
        <br />
        <b>Collaboration is key for me.</b> I believe that great ideas
        come to life when passionate individuals work together in a
        supportive team environment. So, if you have an exciting project
        or an innovative idea that you'd like to bring to fruition, I'm
        all ears. Let's connect and make it happen! <br />
        <br />
        Feel free to explore my portfolio and learn more about my
        skills, experiences, and projects.
        <br /> Thank you for visiting, and I look forward to connecting
        with you soon.
`;
  return (
    <div id="about">
      <Grid container spacing={2} className={classes.shortbiocontainer}>
        <Grid item xs={12}>
          <Typography variant="h5">About Me </Typography>
        </Grid>
        <Grid
          container
          width="85%"
          alignItems="flex-start"
          margin="auto"
          marginTop="0"
          padding="1%"
          textAlign="justify"
        >
          <Grid
            item
            xs={12}
            // sx={{ backgroundColor: "#EEEDE7", borderRadius: "12%" }}
          >
            <Card>
              <CardContent>
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} ref={triggerRef}>
          <BioCV/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShortBio;
