const Card = ({ card, showOutcome = false }) => {
  const linkLabel = card.linkLabel || "View project";

  return (
    <article data-reveal className="reveal w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] min-h-[310px] p-4 bg-[var(--color-dark-soft)] border border-[var(--surface-border)] rounded-lg flex flex-col text-left transition-colors duration-200 hover:border-[var(--color-muted)]">
      {card.img ? (
        <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
          <img
            className="rounded-md mb-3 h-28 w-full object-contain bg-[var(--surface-media)] p-2"
            src={card.img}
            alt={`Screenshot of ${card.title}`}
          />
        </a>
      ) : (
        <div
          className="rounded-md mb-3 h-28 w-full flex items-center justify-center bg-[var(--surface-media)] border border-[var(--surface-border)] text-sm text-[var(--color-muted)]"
          aria-hidden="true"
        >
          No preview
        </div>
      )}

      <h3 className="text-base font-semibold text-[var(--color-light)] leading-snug mb-1">
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

      <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-2 flex-grow line-clamp-3">
        {card.description}
      </p>

      {showOutcome && card.outcome && (
        <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-3 border-l-2 border-[var(--surface-border)] pl-2 line-clamp-2">
          <span className="opacity-75">Outcome: </span>
          {card.outcome}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-3">
        {card.tags?.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[0.6875rem] font-medium text-[var(--color-muted)] bg-[var(--surface-subtle)] border border-[var(--surface-border)] rounded"
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
