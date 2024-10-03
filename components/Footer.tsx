import ImageComp from "./ImageComp";
import logo from "@/public/img/logo-bot.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black px-4">
      <div className=" py-10 w-full max-w-[1520px] mx-auto flex justify-between items-center">
        <div>
          <ImageComp src={logo.src} className="max-md:w-[100px]" />
        </div>
        <div className="flex gap-8 max-md:gap-4 w-fit">
          <div className="grid place-items-center p-2 aspect-square rounded-full border border-white">
            <FaXTwitter className="text-[28px] max-md:text-xl" />
          </div>
          <div className="grid place-items-center p-2 aspect-square rounded-full border border-white">
            <ImageComp src="/img/global.svg" className="w-[28px] max-md:w-5" />
          </div>
          <div className="grid place-items-center p-2 aspect-square rounded-full border border-white">
            <FaTelegramPlane className="text-[28px] max-md:text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
