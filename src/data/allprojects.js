import covidimg from "../img/covid_project.jpg";
import gradebookimg from "../img/gradebook_project.png";
import recipeimg from "../img/recipe_project.png";
import softengimg from "../img/softeng_project.jpg";
import energyliveimg from "../img/energylive22.png";
import iotlivestreamingimg from "../img/iot-live-streaming.jpg";
import minesweeper from "../img/minesweeper.png";
import taxi_adv_db from "../img/taxi_advdb.jpg";
import tedxntua2024 from "../img/tedxntua2024.png";
import tedxntua_archive from "../img/tedxntua_archive.png";
import e_syntagma_project from "../img/e-syntagma_project.png";
import github_explorer from "../img/github_explorer.png";
import data_growthfund from "../img/data_growthfund.png";
import minedu_schools_map from "../img/minedu_schools_map.png";

export const all_projects_list = [
  {
    img: data_growthfund,
    title: "Open Data Hub Charts",
    role: "Full-stack developer",
    description:
      "Interactive dashboard for exploring public investment and employment datasets from data.growthfund.gr.",
    outcome:
      "Chart.js visualizations and map views that make large government datasets easier to filter and compare.",
    tags: ["React", "Next.js", "Chart.js", "Leaflet", "REST API"],
    githubLink: "https://john-papani.github.io/data-growthfund-charts",
    linkLabel: "Live demo",
  },
  {
    img: minedu_schools_map,
    title: "Minedu Schools Map",
    role: "Front-end developer",
    description:
      "Map-based tool for browsing school locations across Greece with search and filtering.",
    outcome:
      "Leaflet map interface deployed on Vercel for quick geographic lookup of institutions.",
    tags: ["React", "Next.js", "Tailwind CSS", "Leaflet"],
    githubLink: "https://minedu-schools-map.vercel.app/",
    linkLabel: "Live demo",
  },
  {
    img: github_explorer,
    title: "GitHub Explorer",
    role: "Front-end developer",
    description:
      "Dashboard to search GitHub users and inspect profiles, repositories, and followers.",
    outcome:
      "Responsive UI with paginated repo lists and clean profile summaries via the GitHub REST API.",
    tags: ["React", "Next.js", "TypeScript", "REST API"],
    githubLink: "https://github-explorer-ivory-eta.vercel.app/",
    linkLabel: "Live demo",
  },
  {
    img: energyliveimg,
    title: "EnergyLive2022",
    role: "Full-stack developer — university SaaS project",
    description:
      "Multi-service app for visualizing energy consumption and generation across European countries.",
    outcome:
      "Microservice architecture with React charts, Express APIs, and MongoDB-backed data pipelines.",
    tags: ["React", "Express.js", "Chart.js", "MongoDB", "Microservices"],
    githubLink: "https://github.com/john-papani/Saas-EnergyLive-Ntua",
    linkLabel: "View code",
  },
  {
    img: e_syntagma_project,
    title: "e-Syntagma",
    role: "Full-stack developer",
    description:
      "Web app for searching and reading articles of the Greek Constitution with a structured UI.",
    outcome:
      "Next.js front end backed by scraped JSON content and a Python data pipeline.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://e-syntagma.vercel.app/",
    linkLabel: "Live demo",
  },
  {
    title: "Greek Constitution Web Scraper",
    role: "Back-end / automation",
    description:
      "Python scraper that extracts constitution articles and stores them as structured JSON for e-Syntagma.",
    outcome:
      "Automated content ingestion replacing manual copy — reusable for future content updates.",
    tags: ["Python", "BeautifulSoup", "JSON", "Web Scraping"],
    githubLink: "https://github.com/john-papani/syntagma-web-scraping",
    linkLabel: "View code",
  },
  {
    img: iotlivestreamingimg,
    title: "IoT Live Streaming Pipeline",
    role: "Back-end developer — course project",
    description:
      "Real-time sensor data pipeline with stream processing, message queues, and time-series storage.",
    outcome:
      "End-to-end ingestion from IoT devices through RabbitMQ and Flink into Grafana dashboards.",
    tags: ["Apache Flink", "RabbitMQ", "OpenTSDB", "Grafana", "Java", "Python"],
    githubLink: "https://github.com/john-papani/IoT-Live-streaming",
    linkLabel: "View code",
  },
  {
    img: gradebookimg,
    title: "GradeBook",
    role: "Full-stack developer",
    description:
      "Web app for tracking university courses and calculating semester averages.",
    outcome:
      "React UI with Node/Express API and MySQL persistence for student grade management.",
    tags: ["React", "Node.js", "Express.js", "MySQL"],
    githubLink: "https://github.com/john-papani/Gradebook",
    linkLabel: "View code",
  },
  {
    img: softengimg,
    title: "Highway Toll Interoperability",
    role: "Full-stack developer — NTUA software engineering",
    description:
      "Web platform modeling interoperability between Greek highway toll systems with different crossing technologies.",
    outcome:
      "Node/EJS application with MySQL data layer demonstrating cross-system toll routing logic.",
    tags: ["Node.js", "Express.js", "EJS", "MySQL"],
    githubLink: "https://github.com/john-papani/Softeng-diodia-Ntua",
    linkLabel: "View code",
  },
  {
    img: taxi_adv_db,
    title: "NYC Taxi Big Data Analytics",
    role: "Data engineer — advanced DB systems",
    description:
      "Large-scale analytics on NYC taxi trip datasets using distributed processing.",
    outcome:
      "Spark/Hadoop pipeline for querying and aggregating trip records stored on HDFS.",
    tags: ["Apache Spark", "Hadoop", "HDFS", "Python"],
    githubLink: "https://github.com/john-papani/advanced_db",
    linkLabel: "View code",
  },
  {
    img: tedxntua2024,
    title: "TEDxNTUA 2024*",
    role: "Contributor — IT team",
    description:
      "Event website for TEDxNTUA 2024 with speaker profiles, schedule, and registration flows.",
    outcome:
      "Production Next.js site deployed for the live event at tedxntua.com.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    githubLink: "https://2024.tedxntua.com/",
    linkLabel: "Live site",
  },
  {
    img: tedxntua_archive,
    title: "TEDxNTUA Archive*",
    role: "Contributor — IT team",
    description:
      "Archive site cataloguing TEDxNTUA events, speakers, and talk metadata.",
    outcome:
      "Central hub linking historical events and maintaining brand consistency across years.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    githubLink: "https://tedxntua.com/",
    linkLabel: "Live site",
  },
  {
    img: covidimg,
    title: "COVID-19 Tracker",
    role: "Front-end developer",
    description:
      "Country-level dashboard for COVID-19 cases and deaths with time-series charts.",
    outcome:
      "React + Chart.js interface consuming public health API data.",
    tags: ["React", "Chart.js", "REST API"],
    githubLink: "https://github.com/john-papani/covid19-tracker",
    linkLabel: "View code",
  },
  {
    img: recipeimg,
    title: "Recipe Treasure",
    role: "Full-stack developer",
    description:
      "Recipe browser with search and category filtering backed by a REST API.",
    outcome:
      "Full-stack CRUD app with React front end and Node/MySQL backend.",
    tags: ["React", "Node.js", "Express.js", "MySQL"],
    githubLink: "https://github.com/john-papani/Recipe-Treasure",
    linkLabel: "View code",
  },
  {
    img: minesweeper,
    title: "Minesweeper with Super Mine",
    role: "Developer — multimedia course",
    description:
      "Desktop Minesweeper implementation in Java with an extended super-mine mechanic.",
    outcome:
      "JavaFX game demonstrating OOP design, event handling, and custom UI components.",
    tags: ["Java", "JavaFX"],
    githubLink: "https://github.com/john-papani/minesweeper_multimedia_ntua_22",
    linkLabel: "View code",
  },
];
