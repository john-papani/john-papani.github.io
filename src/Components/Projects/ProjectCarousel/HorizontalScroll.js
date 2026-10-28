import React, { useState } from "react";
import { all_projects_list } from "../../../data/allprojects";
import Card from "./Card";

const featuredTitles = new Set([
  "Open Data Hub Charts",
  "Minedu Schools Map",
  "GitHub Explorer",
  "EnergyLive2022",
  "TEDxNTUA 2024*",
  "TEDxNTUA Archive*",
]);

const ProjectsGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = showAll
    ? all_projects_list
    : all_projects_list.filter(({ title }) => featuredTitles.has(title));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 w-[min(96%,1180px)] mx-auto px-2">
        {projects.map((card) => (
          <Card
            card={card}
            key={card.title}
            showOutcome={featuredTitles.has(card.title)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          aria-expanded={showAll}
          className="px-4 py-2 text-sm font-medium text-[var(--color-light)] border border-[var(--surface-border)] rounded-md hover:border-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
        >
          {showAll ? "Show less" : `Show all projects (${all_projects_list.length})`}
        </button>
      </div>
    </>
  );
};

export default ProjectsGrid;
