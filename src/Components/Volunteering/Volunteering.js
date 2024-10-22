import React from "react";
import { volunteering_exper_list } from "./volunteering_exper";

const Volunteering = () => {
  return (
    <div id="volunteering" className="pt-[5%] pb-10">
      <p className="text-2xl text-center font-bold m-6">Volunteering</p>
      <div className="flex flex-wrap justify-center items-stretch gap-6 w-3/4 mx-auto mb-2">
        {volunteering_exper_list
          .sort((a, b) => {
            // Check if either date has the word "Present"
            if (a.end_time.includes("Present")) return -1; // "Present" goes to the top
            if (b.end_time.includes("Present")) return 1;
            return new Date(b.end_time) - new Date(a.end_time); // Sort by date (descending)
          })
          .map((volunteering, index) => (
            <div
              key={index}
              className="flex flex-col w-full md:w-[300px] p-6 bg-black border border-red-700 rounded-lg shadow-lg"
            >
              {/* <p>{index}</p> */}
              <time className="text-xs lg:text-sm text-red-500">
                {volunteering.start_time} - {volunteering.end_time}
              </time>
              <h5 className="text-lg lg:text-xl font-bold tracking-tight text-white">
                {volunteering.title}
              </h5>
              <div className="flex items-center">
                {volunteering.logoimage && (
                  <img
                    src={volunteering.logoimage}
                    alt={volunteering.logoimage}
                    className="w-6 h-6 mr-1 rounded-full "
                  />
                )}
                {volunteering.location_url ? (
                  <a
                    href={volunteering.location_url}
                    target="_blank"
                    rel="noreferrer"
                    className="italic underline decoration-red-600"
                  >
                    <h5 className="text-sm lg:text-base font-normal text-red-600">
                      {volunteering.location}
                    </h5>
                  </a>
                ) : (
                  <h5 className="text-sm lg:text-base font-normal text-red-600">
                    {volunteering.location}
                  </h5>
                )}
              </div>

              {/* <ul className="mb-2 text-sm font-normal text-red-300 list-disc list-inside space-y-1"> */}
              {/* {volunteering.description.split("\n").map((bullet, index) => ( */}
              {/* <li key={index}>{bullet}</li> */}
              {/* ))} */}
              {/* </ul> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Volunteering;
