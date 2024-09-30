"use client";

import { useInView } from "react-intersection-observer";
import AboutUs from "./home/AboutUs";

function SectionWrapper({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-50"
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SectionWrapper>
        <AboutUs />
      </SectionWrapper>
    </>
  );
}
