import ImageComp from "@/components/ImageComp";
import fireBg from "@/public/img/Group 21.png";
import whyBg from "@/public/img/why-ztank/why-bg.png";
import videoGame from "@/public/img/why-ztank/video-game.png";
import starknet2 from "@/public/img/why-ztank/starknet2.png";
import starknet3 from "@/public/img/why-ztank/starknet3.png";

const AboutUs = () => {
  return (
    <div id="aboutus" className="relative w-full">
      <ImageComp
        className="absolute top-0 min-w-full h-full w-auto left-0"
        src={fireBg.src}
      />
      <div className="w-full h-[20%] top-0 absolute left-0 bg-gradient-to-b z-[5] pointer-events-none from-black to-transparent"></div>
      <div className="relative z-10 pt-24 md:pb-[280px] w-full">
        <div className="w-full relative z-[11] mx-auto max-w-[1520px]">
          <div className="flex flex-col gap-5 md text-center">
            <h2 className="font-anton text-[52px] leading-[79px] max-md:text-3xl">
              Welcome to ZTank!
            </h2>
            <p className="font-sf-pro-display text-[24px] max-md:text-xl leading-7 max-w-[1050px] mx-auto">
              {`ZTank is a groundbreaking GameFi project built on Starknet,
              blending the iconic tank battles of the 90s with modern blockchain
              technology. Immerse yourself in real-time, action-packed
              multiplayer combat, where you’ll command and upgrade your tank
              fleet, battle enemies, and conquer dynamic battlefields.`}
            </p>
          </div>
          <div className="mt-[98px] relative max-w-[1500px] w-full mx-auto shadow-whyShadow rounded-[46px] max-md:rounded-b-none overflow-hidden">
            <div className="w-full h-[20%] bottom-0 left-0 bg-gradient-to-b from-transparent to-black absolute md:hidden"></div>
            <ImageComp
              src={whyBg.src}
              className="w-full absolute h-full -z-[1]"
            />
            <div className="pt-8 p-[72px] max-md:p-10 flex flex-col gap-9  top-0 left-0 right-0">
              <h2 className="font-anton text-[52px] max-md:text-3xl leading-[80px] text-center gap-[58px]">
                Why ZTank?
              </h2>
              <div className="flex flex-col gap-10 max-md:gap-6">
                <div className="p-10 max-md:p-4 rounded-2xl max-md:flex-col max-md:justify-center flex gap-6 items-center bg-gray/65 backdrop-blur-sm">
                  <ImageComp
                    src={videoGame.src}
                    className="min-w-[200px] w-[200px] h-[200px] aspect-square rounded-xl"
                  />
                  <div className="flex flex-col gap-6">
                    <p className="font-anton text-3xl max-md:textxl max-md:text-center">
                      Innovative Gameplay
                    </p>
                    <p className="text-xl max-md:text-center max-md:text-base">
                      {`ZTANK brings the nostalgia of classic tank warfare to the
                      next level, offering immersive real-time battles, exciting
                      maps, and competitive gameplay designed for both solo
                      players and teams.`}
                    </p>
                  </div>
                </div>
                <div className="p-10 max-md:p-4 rounded-2xl max-md:flex-col max-md:justify-center flex gap-6 items-center bg-gray/65 backdrop-blur-sm">
                  <div className="flex flex-col gap-6">
                    <p className="font-anton text-3xl max-md:textxl max-md:text-center text-end">
                      Blockchain Ownership
                    </p>
                    <p className="text-xl max-md:text-center max-md:text-base text-end">
                      {`We enhance your gameplay experience by combining ownership through NFTs, allowing players to own, trade, and upgrade tanks, assets, and abilities, giving real value to your in-game achievements.`}
                    </p>
                  </div>
                  <ImageComp
                    src={starknet2.src}
                    className="min-w-[200px] w-[200px] h-[200px] aspect-square rounded-xl"
                  />
                </div>
              </div>
              <div className="p-10 max-md:p-4 rounded-2xl max-md:flex-col max-md:justify-center flex gap-6 items-center bg-gray/65 backdrop-blur-sm">
                <ImageComp
                  src={starknet3.src}
                  className="min-w-[200px] w-[200px] h-[200px] aspect-square rounded-xl"
                />
                <div className="flex flex-col gap-6">
                  <p className="font-anton text-3xl max-md:textxl max-md:text-center">
                    Powered by Starknet{" "}
                  </p>
                  <p className="text-xl max-md:text-center max-md:text-base">
                    {`Ztank utilizes Starknet’s scalability, speed, and low-cost infrastructure to deliver a smooth and seamless gaming experience. With Starknet’s decentralized architecture, players can enjoy secure, fast transactions and true ownership of their assets.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
