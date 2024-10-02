import ImageComp from "@/components/ImageComp";
import red from "@/public/img/red.jpg";
import fireBg from "@/public/img/fire-bg.png";
import gradientTopBg from "@/public/img/gradient-bg-top.png";
import gradientBotBg from "@/public/img/gradient-bg-bot.png";
import whyBg from "@/public/img/why-ztank/why-bg.png";
import videoGame from "@/public/img/why-ztank/video-game.png";
import starknet2 from "@/public/img/why-ztank/starknet2.png";
import starknet3 from "@/public/img/why-ztank/starknet3.png";

const AboutUs = () => {
  const cards = [
    {
      imageSrc: videoGame,
      title: "Innovative Gameplay",
      description:
        "ZTANK brings the nostalgia of classic tank warfare to the next level, offering immersive real-time battles, exciting maps, and competitive gameplay designed for both solo players and teams.",
    },
    {
      imageSrc: starknet2,
      title: "Blockchain Ownership",
      description:
        "We enhance your gameplay experience by combining ownership through NFTs, allowing players to own, trade, and upgrade tanks, assets, and abilities, giving real value to your in-game achievements.",
    },
    {
      imageSrc: starknet3,
      title: "Powered by Starknet",
      description:
        "Ztank utilizes Starknet’s scalability, speed, and low-cost infrastructure to deliver a smooth and seamless gaming experience. With Starknet’s decentralized architecture, players can enjoy secure, fast transactions and true ownership of their assets.",
    },
  ];

  return (
    <div className="relative w-full h-fit ">
      <div className="absolute w-full top-0 left-0 h-full">
        <ImageComp
          src={red.src}
          className="w-full h-full absolute top-0 left-0"
        />
        <ImageComp
          className="absolute top-0 left-0 w-full z-[3]  h-full "
          src={gradientTopBg.src}
        />
        {/* <ImageComp
          className="absolute z-0 top-[300px] left-0 w-full h-full max-h-[405px]"
          src={gradientBotBg.src}
        /> */}
      </div>
      <div className="relative z-10 pt-[6.84%]  w-full">
        <ImageComp
          className="absolute z-10 bottom-0 object-fill object-bottom top-[268px] left-0 w-full h-full "
          src={fireBg.src}
        />
        <div className="w-full relative z-[11] mx-auto max-w-[1520px]">
          <div className="flex flex-col gap-5 px-[217px] text-center">
            <h2 className="font-anton text-[52px] leading-[79px]">
              Welcome to ZTank!
            </h2>
            <p className="font-sf-pro-display text-[24px] leading-7">
              ZTank is a groundbreaking GameFi project built on Starknet,
              blending the iconic tank battles of the 90s with modern blockchain
              technology. Immerse yourself in real-time, action-packed
              multiplayer combat, where you’ll command and upgrade your tank
              fleet, battle enemies, and conquer dynamic battlefields.
            </p>
          </div>
          <div className="mt-[98px] relative max-w-[1500px] w-full mx-auto ">
            <ImageComp
              src={whyBg.src}
              className="w-full rounded-[46px] shadow-whyShadow "
            />
            <div className="pt-8 p-[72px] flex flex-col gap-9 absolute top-0 left-0 right-0">
              <h2 className="font-anton text-[52px] leading-[80px] text-center gap-[58px]">
                Why ZTank?
              </h2>
              <div className="grid grid-flow-col gap-[58px] w-full">
                {cards.map((card, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-gray/65 w-full pb-6 text-center rounded-[46px] flex flex-col items-center gap-4"
                    >
                      <ImageComp
                        src={card.imageSrc.src}
                        className="rounded-[37px] w-full max-w-[320px] mt-[45px] mx-auto"
                      />
                      <div className="flex flex-col px-5">
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
    </div>
  );
};
export default AboutUs;
