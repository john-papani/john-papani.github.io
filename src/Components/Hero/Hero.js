import React from "react";
import { useStyles } from "./herostyle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Avatar, Grid } from "@mui/material";
import photoprofilegiannis from "../../img/2.png";

const Hero = ({ isPhone }) => {
  const classes = useStyles();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={classes.hero} aria-labelledby="hero-heading">
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        className={classes.typedContainer}
      >
        <Grid item xs={12} md={5} className={classes.avatarCol}>
          <Avatar
            alt="Ioannis Papanikolaou"
            src={photoprofilegiannis}
            sx={{
              width: isPhone ? 200 : 280,
              height: isPhone ? 200 : 280,
            }}
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={12} md={7} className={classes.textCol}>
          <p className={classes.eyebrow}>Full-stack software engineer</p>
          <h1 id="hero-heading" className={classes.heading}>
            Ioannis Papanikolaou
          </h1>
          <p className={classes.subheading}>
            M.Eng. in Electrical &amp; Computer Engineering, NTUA
          </p>
          <p className={classes.summary}>
            I build full-stack web applications, REST APIs, and internal tools for
            business operations — with React, Next.js, Python/Django, Node.js, and
            .NET. Currently focused on dashboards, automation, and maintainable
            software for hospitality and enterprise workflows.
          </p>
          <div className={classes.ctaRow}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View projects
            </button>
            <a
              className="btn-secondary"
              href="./papanikolaou_ioannis_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className={classes.socialRow}>
            <a
              href="https://www.linkedin.com/in/ioannis-papanikolaou-1b205a259"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialLink}
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </a>
            <a
              href="https://github.com/john-papani"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialLink}
              aria-label="GitHub profile"
            >
              <GitHubIcon fontSize="small" />
              GitHub
            </a>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
