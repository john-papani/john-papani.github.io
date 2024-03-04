import React from "react";
import VerticalScroll from "./VerticalScroll";
import HorizontalScroll from "./HorizontalScroll";
const ProjectsCarousel = () => {
  return (
    <>
      <div className="hidden lg:flex md:pt-5" >
        <HorizontalScroll />
      </div>
      <div className="flex lg:hidden pb-[10%] w-full">
        <VerticalScroll />
      </div>
    </>
  );
};

export default ProjectsCarousel;
