import React, { useRef } from "react";
import { fromto } from "../../basic_hooks/gsap";
import { useStyles } from "./aboutStyle";

function LanguageTools({ isPhone }) {
  const classes = useStyles();
  const width_height = isPhone.isPhone ? 50 : 80;
  const languageToolsRef = useRef(null);
  fromto(languageToolsRef);

  // ------------------ GROUPS ------------------ //
  const categories = {
    Languages: [
      { name: "C", url: "https://www.cprogramming.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      { name: "C++", url: "https://www.w3schools.com/cpp/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
      { name: "C#", url: "https://www.w3schools.com/cs/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
      { name: "Java", url: "https://www.java.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
      { name: "PHP", url: "https://www.php.net", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
      { name: "XML", url: "https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/xml/xml-original.svg" },
      { name: "Matlab", url: "https://www.mathworks.com/", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" },
    ],
    Frameworks: [
      { name: "React", url: "https://reactjs.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
      { name: "Redux", url: "https://redux.js.org", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
      { name: "Express", url: "https://expressjs.com", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", whiteBg: true },
      { name: ".NET", url: "https://dotnet.microsoft.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg", whiteBg: true },
      { name: "Bootstrap", url: "https://getbootstrap.com", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg", whiteBg: true },
      { name: "TailwindCSS", url: "https://tailwindcss.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
      { name: "WooCommerce", url: "https://www.woocommerce.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/woocommerce/woocommerce-plain-wordmark.svg" },
      { name: "WordPress", url: "https://www.wordpress.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg" },
    ],
    Databases: [
      { name: "MySQL", url: "https://www.mysql.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", whiteBg: true },
      { name: "MongoDB", url: "https://www.mongodb.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", whiteBg: true },
      { name: "SQLite", url: "https://www.sqlite.org/index.html", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original-wordmark.svg", whiteBg: true },
      { name: "Microsoft SQL Server", url: "https://www.microsoft.com/en-us/sql-server", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", whiteBg: true },
    ],
    Tools: [
      { name: "GitHub", url: "https://github.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg", whiteBg: true },
      { name: "Git", url: "https://git-scm.com/", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "Docker", url: "https://docker.com", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
      { name: "RabbitMQ", url: "https://www.rabbitmq.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rabbitmq/rabbitmq-original-wordmark.svg" },
      { name: "Vercel", url: "https://vercel.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original-wordmark.svg", whiteBg: true },
      { name: "Heroku", url: "https://heroku.com", icon: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" },
      { name: "Postman", url: "https://postman.com", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Axios", url: "https://axios-http.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/axios/axios-plain-wordmark.svg", whiteBg: true },
      { name: "Node.js", url: "https://nodejs.org", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", whiteBg: true },
      { name: "Chart.js", url: "https://www.chartjs.org", icon: "https://www.chartjs.org/media/logo-title.svg" },
      { name: "Linux", url: "https://www.linux.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
    ],
  };

  return (
    <div className={classes.languageTools} ref={languageToolsRef}>
      <p className="text-xl lg:text-3xl text-center italic tracking-wider font-bold py-[1%] m-auto w-[80%]">
        Languages & Tools
      </p>

      <div className="flex flex-col lg:flex-row gap-12 w-[90%] lg:w-[80%] mx-auto pb-10">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="flex flex-col items-center">
            <h3 className="text-lg lg:text-xl text-center italic font-medium mb-4 underline">
              {category}
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-[5vw] lg:gap-[3vw]">
              {items.map(({ name, url, icon, whiteBg }) => (
                <a key={name} href={url} target="_blank" rel="noreferrer">
                  <img
                    src={icon}
                    alt={name}
                    width={width_height}
                    height={width_height}
                    className={`${whiteBg ? "bg-white rounded-[10%] p-1" : ""}`}
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguageTools;
