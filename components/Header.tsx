"use client";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import ImageComp from "./ImageComp";
import logo from "@/public/img/logo.png";
import { useState } from "react";
import useActiveSection from "@/hooks/useActiveSection";
import Link from "next/link";

const Header = () => {
  const items = [
    {
      name: "About Us",
      section: "aboutus",
      threshold: 0.5,
    },
    {
      name: "Game Modes",
      section: "gamemode",
      threshold: 0.4,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useActiveSection(
    [{ name: "Home", section: "overview" }, ...items],
    setActiveTab
  );

  const scrollIntoView = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#000D12] h-[96px] fixed top-0 left-0 z-20 right-0 font-inter text-[20px] leading-6">
      <div className="w-full h-full max-w-[1520px] mx-auto flex justify-between items-center relative px-4">
        <ImageComp
          src={logo.src}
          className="aspect-square h-full cursor-pointer"
          onClick={() => scrollIntoView("overview")}
        />
        <div className="flex max-lg:hidden">
          {items.map((item, index) => {
            return (
              <div
                onClick={() => {
                  scrollIntoView(item.section);
                  setActiveTab(item.section);
                }}
                className={`cursor-pointer px-5 py-3 rounded hover:bg-white/10 transition-all duration-300 ${
                  activeTab == item.section && "text-orange"
                }`}
                key={index}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Link
            target="_blank"
            href={"https://docs.ztank.xyz"}
            className="p-4 bg-orange rounded-xl hover:bg-orange/80 transition-all duration-300"
          >
            White paper
          </Link>
          <HiOutlineMenuAlt3
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-4xl cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute top-full right-0 w-fit bg-black z-20 animate-show-menu">
            <div className="w-full h-full mx-auto flex flex-col p-4 divide-y divide-white/20">
              {items.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      scrollIntoView(item.section);
                      setActiveTab(item.section);
                      setIsMenuOpen(false);
                    }}
                    key={index}
                  >
                    <p className="text-end hover:text-orange cursor-pointer py-2 select-none">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
