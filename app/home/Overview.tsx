import ImageComp from "@/components/ImageComp";
import background from "@/public/img/about-us-bg.png";

const Overview = () => {
  return (
    <div id="overview" className="pt-24 relative h-screen flex md:items-center">
      <ImageComp
        src={background.src}
        className="object-cover w-full h-full absolute -z-[1]"
      />
      <div className="w-full h-full -z-[1] absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-black via-transparent"></div>
      <div className="w-full px-2 max-md:py-20 animate-fade-up">
        <div className="w-full max-w-[1520px] mx-auto flex flex-col gap-3">
          <h1 className="text-[86px] max-md:text-[40px] font-anton text-white uppercase inline-grid">
            <span>Epic Battles,</span>
            <span>Unstoppable Legends</span>
            <span className="text-orange">on Starknet</span>
          </h1>
          <p className="text-[26px] max-md:text-xl leading-8 font-sf-pro-display max-w-[488px]">
            Victory Awaits. Powered by Starknet.
            <br /> ZTANK delivers fast, secure gameplay where domination brings
            real blockchain rewards.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Overview;
