const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="relative h-[30vh] w-[42vw] lg:h-[250px] lg:ml-0 lg:w-[250px] overflow-hidden bg-neutral-200  hover:border-red-700 hover:border-4 cursor-pointer"
      onClick={() => window.open(card.githubLink, "_blank")}
    >
      <div
        style={{
          backgroundImage: `url(${card.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/1 rounded-xl md:rounded-full to-white/0 p-3 text-sm m-2 lg:text-base font-black text-black bg-slate-300 backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Card;
