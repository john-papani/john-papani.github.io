const Card = ({ card }) => {
  const linkLabel = card.linkLabel || "View project";

  return (
    <article className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] min-h-[350px] p-4 bg-[#0c0f18] border border-white/10 rounded-lg flex flex-col text-left transition-colors duration-200 hover:border-white/20">
      {card.img ? (
        <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
          <img
            className="rounded-md mb-3 h-32 w-full object-contain bg-black/20 p-2"
            src={card.img}
            alt={`Screenshot of ${card.title}`}
          />
        </a>
      ) : (
        <div
          className="rounded-md mb-3 h-32 w-full flex items-center justify-center bg-black/25 border border-white/5 text-sm text-slate-400"
          aria-hidden="true"
        >
          No preview
        </div>
      )}

      <h3 className="text-base font-semibold text-white leading-snug mb-1">
        <a
          href={card.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-accent-hover)] no-underline text-inherit"
        >
          {card.title}
        </a>
      </h3>

      {card.role && (
        <p className="text-xs font-medium text-[var(--color-accent)] mb-2">
          {card.role}
        </p>
      )}

      <p className="text-sm text-slate-300 leading-relaxed mb-2 flex-grow">
        {card.description}
      </p>

      {card.outcome && (
        <p className="text-xs text-slate-400 leading-relaxed mb-3 border-l-2 border-white/10 pl-2">
          <span className="text-slate-500">Outcome: </span>
          {card.outcome}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-3">
        {card.tags?.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[0.6875rem] font-medium text-slate-300 bg-white/5 border border-white/8 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={card.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center w-fit text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] no-underline mt-auto"
      >
        {linkLabel}
        <span aria-hidden="true" className="ml-1">
          →
        </span>
      </a>
    </article>
  );
};

export default Card;
