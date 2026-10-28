import React from "react";
import { all_projects_list } from "../../../data/allprojects";
import Card from "./Card";

const ProjectsGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-[min(96%,1180px)] mx-auto px-2">
      {all_projects_list.map((card) => (
        <Card card={card} key={card.title} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
