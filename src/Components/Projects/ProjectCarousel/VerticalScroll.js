import React from "react";
import { all_projects_list } from "../../../data/allprojects";
import Card from "./Card";
const VerticalScroll = () => {
  return (
    <>
      <div className="flex flex-wrap flex-row justify-center gap-2 mx-auto">
        {all_projects_list.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </>
  );
};

export default VerticalScroll;
