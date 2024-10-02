import ImageComp from "@/components/ImageComp";
import fireBackground from "@/public/img/our-technologies/fire-bg.png";
import isolation from "@/public/img/our-technologies/Isolation_Mode.png";
import isolation1 from "@/public/img/our-technologies/Isolation_Mode1.png";
import isolation2 from "@/public/img/our-technologies/Isolation_Mode2.png";
import isolation3 from "@/public/img/our-technologies/Isolation_Mode3.png";

const OurTechnologies = () => {
  const cards = [
    {
      imageSrc: isolation,
      title: "Instant Transactions",
      description:
        "Enjoy near-instant, low-cost in-game transactions without network congestion.",
    },
    {
      imageSrc: isolation1,
      title: "Scalability",
      description:
        "Starknet’s scalability allows ZTANK to handle thousands of players simultaneously, ensuring smooth gameplay at all times",
    },
    {
      imageSrc: isolation2,
      title: "Security",
      description:
        "Starknet’s zero-knowledge rollups guarantee top-tier security, protecting both your assets and in-game achievements.",
    },
    {
      imageSrc: isolation3,
      title: "Decentralized Ownership",
      description:
        "Players have full control over their in-game assets, which are secured and tradable on the blockchain.",
    },
  ];
  return (
    <div className="w-full  h-full relative">
      <ImageComp
        src={fireBackground.src}
        className="w-full h-full absolute top-0 object-cover left-0 "
      />
      <div className="relative pt-[110px] pb-[182px] z-10 flex flex-col items-center gap-[72px] max-w-[1520px] w-full mx-auto">
        <h2 className="font-anton text-[52px] leading-[80px] text-center w-full ">
          Our Technologies
        </h2>
        <div className="grid grid-cols-2 gap-x-[52px] gap-y-[60px]">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className="shadow-whyShadow text-center gap-2 py-4 place-items-center justify-items-center bg-black bg-opacity-[0.68] rounded-[25px] w-[538px] aspect-[538/290] h-full"
              >
                <ImageComp
                  src={card.imageSrc.src}
                  className="h-[112px] mx-auto aspect-square"
                />
                <div className="flex flex-col px-10">
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
  );
};
export default OurTechnologies;
