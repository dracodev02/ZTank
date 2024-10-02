import ImageComp from "@/components/ImageComp";
import welcomeBg from "@/public/img/red.jpg";
import tank from "@/public/img/our-features/tank.png";
import layer1 from "@/public/img/our-features/Layer_1.png";
import layer2 from "@/public/img/our-features/Layer_2.png";

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
    <div id="features" className="relative w-full h-full px-4 pt-24">
      <ImageComp
        src={welcomeBg.src}
        className="w-full absolute h-full top-0 left-0 "
      />
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
      <div className="w-full md:pb-20 h-full md:pt-[154px] relative z-10">
        <div className="max-w-[1520px] mx-auto w-full flex flex-col gap-[62px]">
          <h2 className="font-anton text-[52px] max-md:text-3xl leading-[80px] text-left w-full md:pl-8 max-md:text-center">
            Our Features
          </h2>
          <div className="w-full flex gap-11 items-center max-lg:relative">
            <ImageComp
              src={tank.src}
              className="flex-1 w-full max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2 -z-[1]"
            />
            <div className="lg:w-1/2 flex gap-10 max-md:gap-6 flex-col">
              {cards.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-whyShadow pl-9 pr-5 h-fit bg-black/30 rounded-[25px] flex gap-5 py-6 justify-center items-center backdrop-blur-sm"
                  >
                    <ImageComp
                      src={card.imageSrc.src}
                      className="w-[130px] max-md:w-[60px] object-contain"
                    />
                    <div className="flex w-full flex-col">
                      <h3 className="font-anton text-[34px] max-md:text-2xl leading-[51px]">
                        {card.title}
                      </h3>
                      <p className="text-[20px] max-md:text-base leading-[29px]">
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
