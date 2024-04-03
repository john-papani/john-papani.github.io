import React, { useRef } from "react";
import { Typography, Grid } from "@mui/material";
import { useStyles } from "./aboutStyle";
import { fromto } from "../../basic_hooks/gsap";
function LanguageTools({ isPhone }) {
  const classes = useStyles();
  const xs_size = 3;
  const md_size = 2;
  const width_height = isPhone.isPhone ? 50 : 80;

  const languageToolsRef = useRef(null);
  fromto(languageToolsRef);
  return (
    <div className={classes.languageTools}>
      <p className="text-xl lg:text-3xl text-center italic tracking-wider font-bold py-[1%] m-auto w-[80%]">
        Languages & Tools
      </p>
      {/* <Grid
        container
        spacing={3}
        sx={{
          width: "80%",
          margin: "auto",
          paddingBottom: "2%",
          "@media (max-width: 600px)": {
            width: "95%",
          },
        }}
        ref={languageToolsRef}
      > */}

      <div className="w-[90%] lg:w-[80%] mx-auto pb-10  flex flex-row text-center justify-evenly flex-wrap gap-[5vw] lg:gap-[3vw]">
        <a href="https://www.rabbitmq.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rabbitmq/rabbitmq-original-wordmark.svg"
            alt="rabbitmq"
            width={width_height}
            height={width_height}
          />
        </a>{" "}
        <a href="https://www.java.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg"
            alt="java"
            width={width_height}
            height={width_height}
          />
        </a>{" "}
        <a href="https://vercel.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original-wordmark.svg"
            alt="vercel"
            className="bg-white rounded-[10%] p-1"
            width={width_height}
            height={width_height}
          />
        </a>{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/xml/xml-original.svg"
            alt="xml"
            width={width_height}
            height={width_height}
          />
        </a>{" "}
        <a href="https://docker.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
            alt="docker"
            width={width_height}
            height={width_height}
          />
        </a>{" "}
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
            alt="github"
            className="bg-white rounded-[10%] p-1"
            width={width_height}
            height={width_height}
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            alt="tailwindcss"
            width={width_height}
            height={width_height}
          />
        </a>
        <a href="https://axios-http.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/axios/axios-plain-wordmark.svg"
            alt="axios "
            width={width_height}
            height={width_height}
            className="bg-white rounded-[10%] p-1"
          />
        </a>
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="bootstrap"
            width={width_height}
            height={width_height}
            className="bg-white rounded-[10%] p-1"
          />
        </a>
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
        <a href="https://www.chartjs.org" target="_blank" rel="noreferrer">
          <img
            src="https://www.chartjs.org/media/logo-title.svg"
            alt="chartjs"
            width={width_height}
            height={width_height}
          />
        </a>
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
            className="bg-white rounded-[10%] p-1"
          />
        </a>
        <a href="https://expressjs.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="express"
            width={width_height}
            height={width_height}
            className="bg-white rounded-[10%] p-1"
          />
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width={width_height}
            height={width_height}
          />
        </a>
        <a href="https://heroku.com" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
            alt="heroku"
            width={width_height}
            height={width_height}
          />
        </a>
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
        <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
            alt="linux"
            width={width_height}
            height={width_height}
          />
        </a>
        <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
            alt="matlab"
            width={width_height}
            height={width_height}
          />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
            width={width_height}
            height={width_height}
            className="bg-white rounded-[10%] p-1"
          />
        </a>
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="mysql"
            width={width_height}
            height={width_height}
            className="bg-white rounded-[10%] p-1"
          />
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width={width_height}
            height={width_height}
            className="bg-white rounded-[10%] p-1"
          />
        </a>
        <a href="https://www.php.net" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
            alt="php"
            width={width_height}
            height={width_height}
          />
        </a>
        <a href="https://postman.com" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
            width={width_height}
            height={width_height}
          />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width={width_height}
            height={width_height}
          />
        </a>
        <a href="https://redux.js.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
            width={width_height}
            height={width_height}
          />
        </a>
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
        {/* </Grid> */}
      </div>
    </div>
  );
}

export default LanguageTools;
