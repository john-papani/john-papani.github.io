import React from "react";
import {Typography, Grid} from "@mui/material"
import { useStyles } from "./aboutStyle";
function LanguageTools() {
  const classes = useStyles();
  const xs_size = 4
  const md_size = 3
  const width_height = 100
  return (
    <div className={classes.languageTools}>
      <Typography variant="h5" sx={{ width: "80%", margin: "auto", paddingTop:"1%", paddingBottom:"1%"}}>
        Languages and Tools:
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ width: "80%", margin: "auto", paddingBottom: "2%" }}
      >
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a
            href="https://www.cprogramming.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
              alt="c"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://www.chartjs.org" target="_blank" rel="noreferrer">
            <img
              src="https://www.chartjs.org/media/logo-title.svg"
              alt="chartjs"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a
            href="https://www.w3schools.com/cpp/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
              alt="cplusplus"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a
            href="https://www.w3schools.com/cs/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
              alt="csharp"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a
            href="https://dotnet.microsoft.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
              alt="dotnet"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://heroku.com" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="heroku"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="linux"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
              alt="matlab"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://www.php.net" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
              alt="php"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://postman.com" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a href="https://redux.js.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
        <Grid item xs={xs_size} md={md_size}>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width={width_height}
              height={width_height}
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default LanguageTools;
