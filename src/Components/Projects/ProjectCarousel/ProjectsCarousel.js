import React from "react";
import HorizontalScrollCarouselLaptop from "./HorizontalScrollCarouselLaptop";
import VerticalScroll from "./VerticalScroll";

const ProjectsCarousel = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <HorizontalScrollCarouselLaptop />
      </div>
      <div className="flex lg:hidden">
        <VerticalScroll />
      </div>
    </>
  );
};

export default ProjectsCarousel;
