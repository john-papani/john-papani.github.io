import { useState, useEffect, useRef } from "react";

const WorkItem = ({ work,duration }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Check if the content's scroll height is greater than the fixed height
    if (contentRef.current.scrollHeight > 80) {
      setNeedsExpansion(true);
    } else {
      setIsExpanded(true); // If content is small, auto-expand by default
    }
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="mb-10 ms-4 bg-black p-[10px] rounded-lg relative">
      <div className="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -start-[23px] border border-white"></div>

      <time className="mb-1 text-xs lg:text-sm font-normal leading-none text-red-500">
        {work.start_time} - {work.end_time} ({duration})
      </time>
      <h3 className="text-base lg:text-lg font-semibold text-white">{work.title}</h3>
      {work.location_url ? (
        <a
          href={work.location_url}
          target="_blank"
          rel="noreferrer"
          className="italic underline decoration-red-600"
        >
          <h5 className="text-sm font-normal text-red-600">{work.location}</h5>
        </a>
      ) : (
        <h5 className="text-sm font-normal text-red-600">{work.location}</h5>
      )}

      <ul
        ref={contentRef}
        className={`mb-2 text-xs lg:text-sm font-normal text-red-300 list-disc list-inside space-y-1 transition-all duration-300 ${
          isExpanded ? "max-h-full" : "max-h-[80px]"
        } overflow-hidden`}
      >
        {work.description.split("\n").map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>

      {/* Conditionally render the button if expansion is needed */}
      {needsExpansion && (
        <div className="text-center mt-4">
          <button
            onClick={toggleExpanded}
            className="text-sm text-red-600 underline mt-2"
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </button>
        </div>
      )}
    </li>
  );
};

export default WorkItem;
