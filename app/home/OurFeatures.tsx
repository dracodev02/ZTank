import ImageComp from "@/components/ImageComp";
import gradient from "@/public/img/gradient-gamemodes.png";
import welcomeBg from "@/public/img/red.jpg";
import tank from "@/public/img/our-features/tank.png";
import layer1 from "@/public/img/our-features/Layer_1.png";
import layer2 from "@/public/img/our-features/Layer_2.png";
import gradient2 from "@/public/img/our-technologies/gradient.png";
import layer3 from "@/public/img/our-features/Layer_3.png";

const OurFeatures = () => {
  const cards = [
    {
      imageSrc: layer1,
      title: "Player-Owned Assets",
      description:
        "Own your tanks and game assets as NFTs, giving you true control over your gameplay and the ability to trade or upgrade them. ",
    },
    {
      imageSrc: layer2,
      title: "Hybrid Monetization Model",
      description:
        "Ztank combines traditional game monetization with Web3 mechanics, enabling rewards through gameplay, staking, and token-driven economie",
    },
    {
      imageSrc: layer3,
      title: "Guild System",
      description:
        "Build or join guilds, strengthen your community, and earn exclusive rewards as you rise in ranks with your allies.",
    },
  ];
  return (
    <div className="relative w-full h-full max-h-[1080px]">
      <ImageComp
        src={welcomeBg.src}
        className="w-full absolute h-full top-0 left-0 "
      />{" "}
      <div className="w-full h-full top-0 absolute left-0 bg-gradient-to-b from-black to-black via-transparent z-10 pointer-events-none"></div>
      {/* <div className="absolute top-0 h-full left-0 w-full">
        <ImageComp
          className="absolute hidden h-full top-0 left-0 w-full"
          src={gradient.src}
        />
        <ImageComp
          className="absolute hidden h-full top-[70%] z-[1] left-0 w-full"
          src={gradient2.src}
        />
      </div> */}
      <div className="w-full pb-20 h-full pt-[154px] relative z-10">
        <div className="max-w-[1520px] mx-auto w-full flex flex-col gap-[62px]">
          <h2 className="font-anton text-[52px] leading-[80px] text-left w-full pl-8">
            Our Features
          </h2>
          <div className="w-full flex gap-11">
            <ImageComp src={tank.src} className="w-1/2" />
            <div className="w-1/2 flex gap-10 flex-col">
              {cards.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-whyShadow pl-9 pr-5 h-fit bg-black/30 rounded-[25px] flex gap-5 py-6 justify-center items-center"
                  >
                    <ImageComp
                      src={card.imageSrc.src}
                      className="w-[130px] object-contain"
                    />
                    <div className="flex w-full flex-col">
                      <h3 className="font-anton text-[34px] leading-[51px]">
                        {card.title}
                      </h3>
                      <p className="text-[20px] leading-[29px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurFeatures;
