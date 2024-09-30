import ImageComp from "./ImageComp";
import logo from "@/public/img/logo.png";

const Header = () => {
  const items = [
    {
      name: "About Us",
      section: "aboutus",
    },
    {
      name: "Game Modes",
      section: "gamemode",
    },
    {
      name: "Features",
      section: "features",
    },
    {
      name: "Technologies",
      section: "technologies",
    },
  ];

  return (
    <div className="w-screen bg-[#000D12]  fixed top-0 left-0 z-10 right-0 font-inter text-[20px] leading-6">
      <div className="w-full max-w-[1520px] mx-auto flex justify-between items-center">
        <ImageComp src={logo.src} className="h-24 aspect-square" />
        <div className="flex gap-10">
          {items.map((item, index) => {
            return <div key={index}>{item.name}</div>;
          })}
        </div>
        <button className="p-4 bg-orange rounded-xl">Launch App</button>
      </div>
    </div>
  );
};
export default Header;
