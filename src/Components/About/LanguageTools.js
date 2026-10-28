import React from "react";
import { useStyles } from "./aboutStyle";

function LanguageTools({ isPhone, compact = false }) {
  const classes = useStyles();
  const iconSize = isPhone ? 44 : 56;

  const categories = {
    Languages: [
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
      { name: "Python", url: "https://www.python.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "C#", url: "https://dotnet.microsoft.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
      { name: "Java", url: "https://www.java.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg" },
      { name: "C", url: "https://www.cprogramming.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      { name: "C++", url: "https://isocpp.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
    ],
    Frameworks: [
      { name: "React", url: "https://react.dev/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
      { name: "Next.js", url: "https://nextjs.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg", whiteBg: true },
      { name: "Django", url: "https://www.djangoproject.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" },
      { name: "Express", url: "https://expressjs.com", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", whiteBg: true },
      { name: ".NET", url: "https://dotnet.microsoft.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg", whiteBg: true },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
    ],
    Databases: [
      { name: "PostgreSQL", url: "https://www.postgresql.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg", whiteBg: true },
      { name: "MySQL", url: "https://www.mysql.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", whiteBg: true },
      { name: "Redis", url: "https://redis.io/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" },
      { name: "MongoDB", url: "https://www.mongodb.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", whiteBg: true },
      { name: "Microsoft SQL Server", url: "https://www.microsoft.com/en-us/sql-server", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", whiteBg: true },
    ],
    Tools: [
      { name: "Docker", url: "https://docker.com", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
      { name: "Git", url: "https://git-scm.com/", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "GitHub", url: "https://github.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg", whiteBg: true },
      { name: "Node.js", url: "https://nodejs.org", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", whiteBg: true },
      { name: "Chart.js", url: "https://www.chartjs.org", icon: "https://www.chartjs.org/media/logo-title.svg" },
      { name: "Postman", url: "https://postman.com", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Linux", url: "https://www.linux.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
    ],
  };

  if (compact) {
    return (
      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="section-title">
          Skills &amp; Tools
        </h2>
        <div data-reveal className="reveal space-y-5 p-5 bg-[var(--color-dark-soft)] border border-[var(--surface-border)] rounded-lg">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map(({ name, url, icon, whiteBg }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    aria-label={name}
                    className="flex flex-col items-center gap-1 w-14 text-[0.65rem] text-center text-[var(--color-muted)] no-underline"
                  >
                    <img
                      src={icon}
                      alt=""
                      width={36}
                      height={36}
                      className={whiteBg ? "bg-white rounded-md p-1" : ""}
                    />
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={classes.languageTools} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">
        Skills &amp; Tools
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 w-[min(92%,1000px)] mx-auto pb-4">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="flex-1 flex flex-col items-center">
            <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wide mb-4">
              {category}
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              {items.map(({ name, url, icon, whiteBg }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={name}
                  aria-label={name}
                >
                  <img
                    src={icon}
                    alt=""
                    width={iconSize}
                    height={iconSize}
                    className={whiteBg ? "bg-white rounded-md p-1" : ""}
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguageTools;
