import ImageComp from "@/components/ImageComp";
import warTank from "@/public/img/war-tank.png";
import earning from "@/public/img/game-modes/earning.png";
import battle from "@/public/img/game-modes/battle.png";
import miniGame from "@/public/img/game-modes/mini-game.png";
import pre from "@/public/img/game-modes/pre.png";
import team from "@/public/img/game-modes/team.png";
import gradient from "@/public/img/gradient-gamemodes.png";

const GameModes = () => {
  const cards = [
    {
      imageSrc: earning,
      title: "Earning Arena Mode",
      description:
        "Train, strategize, and earn modest rewards as you prepare for more intense, high-stakes battles.",
    },
    {
      imageSrc: battle,
      title: "Battle Arena Mode",
      description:
        "Enter real-time PvP battles, where 4 players compete for domination in shrinking maps. The last tank standing takes all.",
    },
    {
      imageSrc: team,
      title: "Team vs Team Mode",
      description:
        "Join forces with friends or other players in epic 3v3 team battles (soon to be 5v5), fostering camaraderie and a competitive edge.",
    },
    {
      imageSrc: pre,
      title: "Prediction Mode",
      description:
        "Use your strategic insights to predict outcomes of battles and earn rewards based on your accuracy.",
    },
    {
      imageSrc: miniGame,
      title: "Mini Game - Tetris Mode",
      description:
        "Enjoy a classic twist on gaming with competitive Tetris, where winners claim valuable rewards.",
    },
  ];

  return (
    <div className="relative mt-[281px]">
      <ImageComp src={warTank.src} className="w-full h-full max-h-[1217px]" />
      <ImageComp className="absolute top-0 left-0 w-full" src={gradient.src} />
      <div className="absolute top-0 left-0 w-full">
        <div className=" max-w-[1520px]  mx-auto flex flex-col gap-[72px] items-center">
          <h2 className="font-anton text-[52px] leading-[80px] text-center gap-[58px]">
            Game Modes
          </h2>
          <div className="flex flex-wrap justify-center gap-x-[75px] gap-y-[64px]">
            {cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="w-[450px] bg-black/30 shadow-whyShadow rounded-[25px] h-[427px] flex flex-col items-center justify-center text-center"
                >
                  <ImageComp src={card.imageSrc.src} />
                  <h3 className="font-anton text-[34px] leading-[51px]">
                    {card.title}
                  </h3>
                  <p className="text-[20px] px-9 leading-[29px]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameModes;
