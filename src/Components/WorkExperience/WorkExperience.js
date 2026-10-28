import React, { useMemo, useRef } from "react";
import { work_experience_list } from "../../data/work_exper";
import WorkItem from "./WorkItem";
import { parseMonthYear } from "../../utils/parseMonthYear";

const WorkExperience = () => {
  const containerRef = useRef(null);

  const sortedExperienceList = useMemo(() => {
    return [...work_experience_list].sort((a, b) => {
      const aIsPresent = a.end_time?.includes("Present");
      const bIsPresent = b.end_time?.includes("Present");
      if (aIsPresent && !bIsPresent) return -1;
      if (!aIsPresent && bIsPresent) return 1;
      const endDateA = parseMonthYear(a.end_time);
      const endDateB = parseMonthYear(b.end_time);
      if (endDateA.getTime() !== endDateB.getTime()) {
        return endDateB - endDateA;
      }
      const startDateA = parseMonthYear(a.start_time);
      const startDateB = parseMonthYear(b.start_time);
      return startDateB - startDateA;
    });
  }, []);

  return (
    <section
      id="work-experience"
      aria-labelledby="experience-heading"
      className="pt-11 pb-6 w-[min(92%,1100px)] mx-auto"
    >
      <h2 id="experience-heading" className="section-title">
        Work Experience
      </h2>
      <ol
        ref={containerRef}
        className="relative border-s border-white/15 mx-auto list-none pl-0"
      >
        {sortedExperienceList.map((work) => (
          <WorkItem key={`${work.title}-${work.start_time}`} work={work} />
        ))}
      </ol>
    </section>
  );
};

export default WorkExperience;
