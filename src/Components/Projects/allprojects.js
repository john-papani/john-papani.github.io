import covidimg from "../../img/covid_project.jpg";
import gradebookimg from "../../img/gradebook_project.png";
import recipeimg from "../../img/recipe_project.png";
import softengimg from "../../img/softeng_project.jpg";
import energyliveimg from "../../img/energylive22.png";
import iotlivestreamingimg from "../../img/iot-live-streaming.jpg";
import minesweeper from "../../img/minesweeper.png";
import taxi_adv_db from "../../img/taxi_advdb.jpg";
import tedxntua2024 from "../../img/tedxntua2024.png";
import tedxntua_archive from "../../img/tedxntua_archive.png";
import e_syntagma_project from "../../img/e-syntagma_project.png";
import github_explorer from "../../img/github_explorer.png";
import data_growthfund from "../../img/data_growthfund.png";

export const all_projects_list = [
  {
    img: github_explorer,
    title: "Github Explorer",
    description:
      "A modern and responsive GitHub Dashboard/Explorer that allows you to search for any GitHub user and view their profile, repositories, and followers in a clean and interactive UI.",
    tags: ["React", "Next.js", "Tailwind CSS", "axios"],
    githubLink: "https://github-explorer-ivory-eta.vercel.app/",
  },
  {
    img: data_growthfund,
    title: "Open Data Hub Charts",
    tags: ["React", "Next.js", "Tailwind CSS", "axios", "Chart.js", "leaflet"],
    description:
      "This project is a web application that provides interactive data visualizations based on the statistics from the official data.growthfund.gr platform. The goal is to offer users an engaging way to explore various datasets related to employment, investments, and performance.",
    githubLink: "https://john-papani.github.io/data-growthfund-charts",
  },
  {
    img: e_syntagma_project,
    title: "e-Syntagma",
    description:
      "e-Syntagma is a web application that provides information about the Greek Syntagma.",
    githubLink: "https://e-syntagma.vercel.app/",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },

  {
    // img: e_syntagma_project,
    title: "Web Scraper for Greek Constitution Articles",
    description:
      "This project is a web scraper that extracts articles from the Greek Constitution and stores them in a JSON file. It was created as part of the e-Syntagma project.",
    githubLink: "https://github.com/john-papani/syntagma-web-scraping",
    tags: ["Python", "BeautifulSoup", "JSON", "Web Scraping"],
  },
  {
    img: tedxntua2024,
    title: "TEDxNTUA 2024*",
    description: "A web app for the TEDxNTUA 2024 event.",
    githubLink: "https://2024.tedxntua.com/",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    img: tedxntua_archive,
    title: "TEDxNTUA Archive*",
    description:
      "A web app that serves as an archive for all the TEDxNTUA events, showcasing the speakers and their talks.",
    githubLink: "https://tedxntua.com/",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    img: iotlivestreamingimg,
    title: "IoT-Live-streaming",
    description:
      "This project was part of the Analysis and Design of Information Systems course at NTUA. (2022-23, Fall Semester).",
    githubLink: "https://github.com/john-papani/IoT-Live-streaming",
    tags: [
      "GrafanaDB",
      "Apache Flink",
      "OpenTSDB",
      "RabbitMQ",
      "Java",
      "Python",
    ],
  },
  {
    img: minesweeper,
    title: "Minesweeper Game with Super Mine",
    description:
      "This project is a Java implementation of the classic Minesweeper game, with the added feature of a 'super mine'. This project was conducted for the course of Multimedia Technology at the 2022-23 Fall semester of the Electrical and Computer Engineering School at the National Technical University of Athens.",
    tags: ["Java", "JavaFX"],
    githubLink: "https://github.com/john-papani/minesweeper_multimedia_ntua_22",
  },
  {
    img: taxi_adv_db,
    title: "Advanced Topics in Database Systems 2022-2023",
    description:
      "TLC-NYC-Big-Data-Analytics. Semester project for the Advanced Database Systems Course @ NTUA ECE 2022-2023.",
    tags: ["Apache Spark", "Hadoop", "HDFS", "Python"],
    githubLink: "https://github.com/john-papani/advanced_db",
  },
  {
    img: energyliveimg,
    title: "EnergyLive2022",
    description:
      "'EnergyLive2022' is a Software as a Service application, where the user can see various charts related to Energy consumption and generation in European countries.",
    tags: [
      "React",
      "MicroServices",
      "Chart.js",
      "axios",
      "Bootstrap",
      "Express.js",
      "MongoDB",
    ],
    githubLink: "https://github.com/john-papani/Saas-EnergyLive-Ntua",
  },
  {
    img: softengimg,
    title: "Software Engineering ECE NTUA 2021-2022",
    description:
      "A web app about interoperability in tolls highways with different automatic crossing systems.",
    githubLink: "https://github.com/john-papani/Softeng-diodia-Ntua",
    tags: ["EJS", "Node.js", "Express.js", "CSS", "Axios", "mySQL"],
  },
  {
    img: gradebookimg,
    title: "GradeBook",
    description:
      "A simple web app where you can calculate the Average for your university courses.",
    tags: ["React", "Node.js", "Express.js", "mySQL"],
    githubLink: "https://github.com/john-papani/Gradebook",
  },
  {
    img: covidimg,
    title: "Covid-19 Tracker",
    description: "Chart with Cases and Deaths for Every Country.",
    tags: ["React", "Chart.js", "axios"],
    githubLink: "https://github.com/john-papani/covid19-tracker",
  },
  {
    img: recipeimg,
    title: "Recipe Treasure",

    description:
      "A simple web app where you can find some delicious recipes from all over the world.",
    tags: ["React", "Node.js", "Express.js", "mySQL"],
    githubLink: "https://github.com/john-papani/Recipe-Treasure",
  },
];
