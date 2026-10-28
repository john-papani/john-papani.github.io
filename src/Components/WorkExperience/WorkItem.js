const WorkItem = ({ work }) => {
  const isCurrent = work.end_time === "Present";

  return (
    <li
      data-reveal
      className={`mb-4 ms-4 bg-[var(--color-dark-soft)] border p-5 rounded-lg relative list-none ${
        isCurrent ? "border-[var(--color-accent)]" : "border-[var(--surface-border)]"
      } reveal`}
    >
      <div
        className="absolute w-2.5 h-2.5 bg-[var(--color-accent)] rounded-full mt-2 -start-[21px] border border-[var(--color-dark)]"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-[var(--color-light)] leading-snug">
            {work.title}
          </h3>
          <div className="mt-1 flex items-center">
            {work.logoimage && (
              <img src={work.logoimage} alt="" className="w-5 h-5 mr-2 rounded-full" />
            )}
            <a
              href={work.location_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-light)] underline-offset-2"
            >
              {work.location}
            </a>
          </div>
        </div>
        <time className="shrink-0 text-xs font-medium text-[var(--color-accent-hover)] sm:text-right">
          {work.start_time} — {work.end_time}
        </time>
      </div>

      <ul className="mt-3 text-sm text-[var(--color-muted)] list-disc list-outside ml-4 space-y-1.5">
        {work.description.split("\n").map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mt-4" aria-label="Technologies used">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[0.6875rem] font-medium text-[var(--color-muted)] bg-[var(--surface-subtle)] border border-[var(--surface-border)] rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
};

export default WorkItem;
