const Card = ({ card }) => {
  return (
    <div className="w-[82vw] md:w-[30vw] lg:w-[21vw] xl:w-[18vw] min-h-[360px] lg:min-h-[390px] pb-4 px-3 bg-[#0c0f18]/85 border border-white/10 rounded-lg shadow-2xl shadow-black/30 backdrop-blur-md flex flex-col justify-around text-center transition-transform duration-300 hover:-translate-y-1 hover:border-red-400/60">
      <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-lg p-1 max-h-[15vh] w-3/4 mx-auto object-contain"
          src={card.img}
          alt=""
        />
      </a>
      <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
        <h5 className="mb-2 text-lg xl:text-xl font-bold tracking-tight text-white leading-snug">
          {card.title}
        </h5>
      </a>
      <p className="mb-2 text-xs xl:text-sm font-normal text-slate-300 leading-relaxed">
        {card.description}
      </p>
      <div className="flex justify-center items-center flex-wrap">
        {card.tags?.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2 py-1 text-[0.7rem] xl:text-xs font-medium text-slate-200 bg-white/10 border border-white/10 rounded-full m-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={card.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center w-fit mx-auto px-3 py-2 mt-2 text-xs xl:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-[#ff3d55] hover:bg-[#ff6374] focus:ring-red-900/50"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default Card;
