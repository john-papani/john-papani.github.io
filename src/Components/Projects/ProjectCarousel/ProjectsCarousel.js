import React from "react";
import VerticalScroll from "./VerticalScroll";
import HorizontalScroll from "./HorizontalScroll";
const ProjectsCarousel = () => {
  return (
    <>
      <div className="hidden lg:flex md:py-5 justify-evenly" >
        <HorizontalScroll />
      </div>
      <div className="flex lg:hidden pb-[10%] w-full">
        <VerticalScroll />
      </div>
    </>
  );
};

export default ProjectsCarousel;
