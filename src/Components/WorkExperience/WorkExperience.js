import React from "react";
import { work_experience_list } from "./work_exper";
import WorkItem from "./WorkItem";

const WorkExperience = () => {
  return (
    <div id="work experience" className=" pt-[2%] lg:w-3/4 w-3/4 mx-auto">
      <p className="text-2xl text-center font-bold m-10">Work Experience</p>
      <ol className="relative border-s border-red-700 lg:w-3/4 mx-auto">
        {work_experience_list
          .sort((a, b) => {
            // Check if either date has the word "Present"
            if (a.end_time.includes("Present")) return -1; // "Present" goes to the top
            if (b.end_time.includes("Present")) return 1;
            return new Date(b.end_time) - new Date(a.end_time); // Sort by date (descending)
          })
          .map((work, index) => {
            const startDate = new Date(work.start_time);
            const endDate = work.end_time.includes("Present")
              ? new Date()
              : new Date(work.end_time);

            // Calculate duration in years and months
            const totalMonths =
              (endDate.getFullYear() - startDate.getFullYear()) * 12 +
              (endDate.getMonth() - startDate.getMonth());
            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;

            const duration = `${
              years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""
            } ${
              months > 0 ? `${months} month${months > 1 ? "s" : ""}` : ""
            }`.trim();

            return <WorkItem key={index} work={work} duration={duration} />;
          })}
      </ol>
    </div>
  );
};

export default WorkExperience;
