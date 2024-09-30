import ImageComp from "@/components/ImageComp";
import background from "@/public/img/about-us-bg.png";

const AboutUs = () => {
  return (
    <div className="pt-24 relative">
      <div className="absolute top-0 left-0 w-screen h-screen -z-[1]">
        <ImageComp
          src={background.src}
          className="object-cover w-screen h-screen"
        />
      </div>
      <div className=" w-full max-w-[1520px] mx-auto pt-[203px] flex flex-col gap-3">
        <h1 className="text-[86px] font-anton text-white uppercase inline-grid">
          <span>Epic Battles,</span>
          <span>Unstoppable Legends</span>
          <span className="text-orange">on Starknet</span>
        </h1>
        <p className="text-[26px] leading-8 font-sf-pro-display max-w-[488px]">
          Victory Awaits. Powered by Starknet.
          <br /> ZTANK delivers fast, secure gameplay where domination brings
          real blockchain rewards.
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
