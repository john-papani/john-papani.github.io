import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { all_projects_list } from "../allprojects";
import Card from "./Card";

const HorizontalScrollCarouselLaptop = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {all_projects_list.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default HorizontalScrollCarouselLaptop;
