import React from "react";
import { volunteering_exper_list } from "../../data/volunteering_exper";

const Volunteering = () => {
  return (
    <section id="volunteering" className="py-11 px-4" aria-labelledby="volunteering-heading">
      <h2 id="volunteering-heading" className="section-title">
        Volunteering
      </h2>
      <div className="flex flex-wrap justify-center items-stretch gap-4 w-[88%] mx-auto">
        {volunteering_exper_list
          .sort((a, b) => {
            if (a.end_time.includes("Present")) return -1;
            if (b.end_time.includes("Present")) return 1;
            return new Date(b.end_time) - new Date(a.end_time);
          })
          .map((volunteering, index) => (
            <article
              key={index}
              className="flex flex-col w-full sm:w-[calc(50%-0.5rem)] md:w-[280px] p-4 bg-[#0c0f18] border border-white/10 rounded-lg"
            >
              <time className="text-xs text-slate-400 mb-1">
                {volunteering.start_time} – {volunteering.end_time}
              </time>
              <h3 className="text-base font-semibold text-white mb-2">
                {volunteering.title}
              </h3>
              <div className="flex items-center gap-2">
                {volunteering.logoimage && (
                  <img
                    src={volunteering.logoimage}
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                )}
                {volunteering.location_url ? (
                  <a
                    href={volunteering.location_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-muted)] hover:text-white"
                  >
                    {volunteering.location}
                  </a>
                ) : (
                  <span className="text-sm text-[var(--color-muted)]">
                    {volunteering.location}
                  </span>
                )}
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Volunteering;
