import React, { useEffect, useMemo, useRef } from "react";
import { work_experience_list } from "./work_exper";
import WorkItem from "./WorkItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parseMonthYear = (str) => {
  if (!str || str.includes("Present")) return new Date();
  const [monthStr, yearStr] = str.split(" ");
  const monthIndex = new Date(Date.parse(monthStr + " 1")).getMonth();
  const year = parseInt(yearStr);
  return isNaN(monthIndex) || isNaN(year) ? new Date() : new Date(year, monthIndex);
};

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

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".work-item");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.in",
          scrollTrigger: {
            trigger: item,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="work experience" className="pt-[2%] lg:w-3/4 w-3/4 mx-auto">
      <p className="text-2xl text-center font-bold m-10">Work Experience</p>
      <ol
        ref={containerRef}
        className="relative border-s border-red-700 lg:w-3/4 mx-auto"
      >
        {sortedExperienceList.map((work, index) => {
          const startDate = parseMonthYear(work.start_time);
          const endDate = work.end_time?.includes("Present")
            ? new Date()
            : parseMonthYear(work.end_time);

          const totalMonths =
            (endDate.getFullYear() - startDate.getFullYear()) * 12 +
            (endDate.getMonth() - startDate.getMonth());

          const years = Math.floor(totalMonths / 12);
          const months = totalMonths % 12;

          const duration = [
            years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "",
            months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <li key={index} className="work-item">
              <WorkItem work={work} duration={duration} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default WorkExperience;
