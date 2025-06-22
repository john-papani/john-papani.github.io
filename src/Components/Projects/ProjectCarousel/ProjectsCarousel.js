import React from "react";
import VerticalScroll from "./VerticalScroll";
import HorizontalScroll from "./HorizontalScroll";
const ProjectsCarousel = () => {
  return (
    <>
      <div className="hidden lg:flex md:py-5 justify-evenly">
        <HorizontalScroll />
      </div>
      <div className="flex lg:hidden pb-[4%]">
        <VerticalScroll />
      </div>
      <p className="w-[80%] text-right italic text-xs pb-[10%] md:pb-[3%]">
        * indicates contributor role
      </p>
    </>
  );
};

export default ProjectsCarousel;
