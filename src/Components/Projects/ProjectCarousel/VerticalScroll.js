import React from "react";
import { all_projects_list } from "../allprojects";
import Card from "./Card";
const VerticalScroll = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        {all_projects_list.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </>
  );
};

export default VerticalScroll;
