const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="relative h-[35vh] w-[80vw] lg:h-[350px] ml-[10%] lg:ml-0 lg:w-[350px] overflow-hidden bg-neutral-200  hover:border-red-700 hover:border-4 cursor-pointer"
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
        <p className="bg-gradient-to-br from-white/10 to-white/0 p-8 text-sm lg:text-2xl font-black text-black backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Card;
