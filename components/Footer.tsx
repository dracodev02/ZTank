import ImageComp from "./ImageComp";
import logo from "@/public/img/logo-bot.png";
import { FaXTwitter } from "react-icons/fa6";
import { ImSphere } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className=" py-10 w-full max-w-[1520px] mx-auto flex justify-between items-center">
        <div>
          <ImageComp src={logo.src} />
        </div>
        <div className="flex gap-8 w-fit">
          <div className=" grid place-items-center h-11 aspect-square rounded-full border border-white">
            <FaXTwitter className=" text-[28px]" />
          </div>
          <div className=" grid place-items-center h-11 aspect-square rounded-full border border-white">
            <ImSphere className=" text-[28px]" />
          </div>
          <div className=" grid place-items-center h-11 aspect-square rounded-full border border-white">
            <FaTelegramPlane className=" text-[28px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
