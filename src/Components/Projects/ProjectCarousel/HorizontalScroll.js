import React from "react";
import { all_projects_list } from "../../../data/allprojects";
import Card from "./Card";
const HorizontalScroll = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 w-[96%] mx-auto text-center">
        {all_projects_list.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </>
  );
};

export default HorizontalScroll;
