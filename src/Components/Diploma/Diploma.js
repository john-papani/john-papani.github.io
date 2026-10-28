import React from "react";
import DiplomaText from "./DiplomaText";

const Diploma = ({ compact = false }) => {
  const links = [
    {
      label: "View Publication",
      url: "https://doi.org/10.1109/SMAP66932.2025.00009",
    },
    {
      label: "View Thesis",
      url: "https://dspace.lib.ntua.gr/xmlui/handle/123456789/60921",
    },
    { label: "GitHub Repository", url: "https://github.com/john-papani/diploma" },
  ];

  return (
    <section
      id="research"
      className={compact ? "px-0" : "py-11 px-4"}
      aria-labelledby="research-heading"
    >
      <h2 id="research-heading" className="section-title">
        Research &amp; Publication
      </h2>
      <div
        data-reveal
        className={`grid gap-6 items-center mx-auto p-5 bg-[var(--color-dark-soft)] border border-[var(--surface-border)] rounded-lg ${
          compact
            ? "grid-cols-1 w-full"
            : "md:grid-cols-[1fr_260px] w-[min(92%,1000px)]"
        } reveal`}
      >
        <div>
          <DiplomaText />
          <div className="flex flex-wrap gap-2 mt-5">
            {links.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-sm font-medium text-[var(--color-on-accent)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] rounded no-underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <img
          src="https://github.com/john-papani/diploma/blob/master/greek_parliament_picture.png?raw=true"
          alt="Greek Parliament building"
          className={`w-full object-cover rounded-md ${compact ? "h-32" : "h-44"}`}
        />
      </div>
    </section>
  );
};

export default Diploma;
