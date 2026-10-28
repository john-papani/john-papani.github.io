import React from "react";
import ProjectsGrid from "./ProjectCarousel/HorizontalScroll";

const Projects = () => {
  return (
    <section id="projects" data-reveal className="reveal" aria-labelledby="projects-heading">
      <div className="pt-11 pb-6">
        <h2 id="projects-heading" className="section-title">
          Projects
        </h2>
        <ProjectsGrid />
        <p className="w-[min(88%,1180px)] mx-auto text-right text-xs text-[var(--color-muted)] opacity-75 mt-4 pb-5">
          * contributor role
        </p>
      </div>
    </section>
  );
};

export default Projects;
