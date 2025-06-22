const Card = ({ card }) => {
  return (
    <div class="w-[85vw] md:w-[25vw] pb-5 px-2 bg-white border  rounded-lg shadow-sm dark:bg-black  flex flex-col justify-around text-center hover:border-red-600 hover:border-2 border-red-900 ">
      <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
        <img
          class="rounded-t-lg p-1 max-h-[20vh] w-3/4 mx-auto"
          src={card.img}
          alt=""
        />
      </a>
      <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {card.title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {card.description}
      </p>
      <div class="flex justify-center items-center flex-wrap">
        {card.tags?.map((tag, index) => (
          <span
            key={index}
            class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 m-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={card.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center w-fit mx-auto px-3 py-2 mt-1 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-red-600 hover:bg-red-700 focus:ring-red-800"
      >
        Read more
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default Card;
