import { useState, useEffect, useRef } from "react";

const WorkItem = ({ work, duration }) => {
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
    <li className="mb-6 ms-4 bg-[#0c0f18]/85 border border-white/10 shadow-2xl shadow-black/30 p-4 rounded-lg relative backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-red-400/60">
      <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-[23px] border border-white shadow-[0_0_24px_rgba(255,61,85,0.85)]"></div>

      <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <h3 className="text-base lg:text-lg font-semibold text-white leading-snug">
            {work.title}
          </h3>
          <div className="mt-1 flex items-center">
            {work.logoimage && (
              <img
                src={work.logoimage}
                alt={work.logoimage}
                className="w-6 h-6 mr-2 rounded-full"
              />
            )}
            {work.location_url ? (
              <a
                href={work.location_url}
                target="_blank"
                rel="noreferrer"
                className="italic underline decoration-red-600"
              >
                <h5 className="text-sm font-normal text-red-500">
                  {work.location}
                </h5>
              </a>
            ) : (
              <h5 className="text-sm font-normal text-red-500">
                {work.location}
              </h5>
            )}
          </div>
        </div>
        <time className="shrink-0 rounded-md border border-red-400/30 bg-red-500/10 px-2 py-1 text-xs lg:text-sm font-normal leading-none text-red-300">
          {work.start_time} - {work.end_time}
          {duration ? ` (${duration})` : ""}
        </time>
      </div>
      {/* {work.description ? ( */}
        <ul
          ref={contentRef}
        className={`mt-3 mb-1 text-xs lg:text-sm font-normal text-slate-300 list-disc list-inside space-y-1 transition-all duration-300 ${
            isExpanded ? "max-h-full" : "max-h-[76px]"
          } overflow-hidden`}
        >
          {work.description.split("\n").map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      {/* ) : (
        ""
      )} */}

      {/* Conditionally render the button if expansion is needed */}
      {needsExpansion && (
        <div className="text-center mt-2">
          <button
            onClick={toggleExpanded}
            className="text-xs lg:text-sm text-red-600 underline mt-1"
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </button>
        </div>
      )}
    </li>
  );
};

export default WorkItem;
