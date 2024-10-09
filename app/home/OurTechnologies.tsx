import ImageComp from "@/components/ImageComp";
import fireBackground from "@/public/img/our-technologies/fire-bg.png";
import isolation from "@/public/img/our-technologies/Isolation_Mode.png";
import isolation1 from "@/public/img/our-technologies/Isolation_Mode1.png";
import isolation2 from "@/public/img/our-technologies/Isolation_Mode2.png";
import isolation3 from "@/public/img/our-technologies/Isolation_Mode3.png";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OurTechnologies = () => {
  const ourTechRef = useRef(null);
  const isInView = useInView(ourTechRef, {
    once: true,
  });

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
    <div id="technologies" className="w-full h-full relative px-4">
      <ImageComp
        src={fireBackground.src}
        className="w-full h-full absolute top-0 object-cover left-0 "
      />
      <div className="relative py-24 z-10 flex flex-col items-center gap-[72px] max-w-[1520px] w-full mx-auto">
        <h2 className="font-anton text-[52px] max-md:text-3xl leading-[80px] text-center w-full">
          Our Technologies
        </h2>
        <div
          ref={ourTechRef}
          className="grid grid-cols-2 max-md:grid-cols-1 gap-x-[52px] gap-y-[60px] max-md:gap-6"
        >
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                style={{ animationDelay: `${index * 300}ms` }}
                className={`shadow-whyShadow text-center gap-2 py-4 place-items-center justify-items-center bg-black bg-opacity-[0.68] rounded-[25px] w-full h-full ${
                  isInView ? "animate-fade-up" : "opacity-0"
                }`}
              >
                <ImageComp
                  src={card.imageSrc.src}
                  className="h-[112px] mx-auto aspect-square"
                />
                <div className="flex flex-col px-10">
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
  );
};
export default OurTechnologies;
