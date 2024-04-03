import React from "react";
import { all_projects_list } from "../allprojects";
import Card from "./Card";
const HorizontalScroll = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 w-[80%] text-center">
        {all_projects_list.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </>
  );
};

export default HorizontalScroll;
