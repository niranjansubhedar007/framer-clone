"use client";
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const STEP_HEIGHT = 300; // Each step’s vertical scroll region
const LINE_MAX_HEIGHT = 240; // Max height of each vertical line

const HeroPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Given a step index, calculate how tall its colored portion should be
  const getLineHeight = (stepIndex: number) => {
    const stepOffset = STEP_HEIGHT * stepIndex;
    const stepScroll = scrollY - stepOffset;
    const percent = Math.min(Math.max(stepScroll / STEP_HEIGHT, 0), 1);
    return percent * LINE_MAX_HEIGHT;
  };

  // Array of step data: number, title, alignment (left vs right text), and line color
  const steps = [
    {
      number: "01",
      title: "Register your account",
      align: "right" as const,
      color: "#D5C5FA",
    },
    {
      number: "02",
      title: "Deposit your funds",
      align: "left" as const,
      color: "#A35CA2",
    },
    {
      number: "03",
      title: "KYC",
      align: "right" as const,
      color: "#D5C5FA",
    },
    {
      number: "04",
      title: "Start Trading & Earn Profits",
      align: "left" as const,
      color: "#A35CA2",
    },
  ];

  return (
    <>
      {/* Background Image + Dark Overlay */}
      <div className="absolute inset-0 h-fit z-0 ">
        <img
          src="/images/framer img.avif"
          alt="Background"
          className="w-full h-[133rem] object-cover overflow-hidden"
        />
        <div className="absolute inset-0 h-[110rem]  bg-gradient-to-b from-[#100918] to-[#000000] opacity-72" />
      </div>

      <main className="text-white font-sans flex flex-col items-center justify-start pt-20 relative overflow-x-hidden px-4 sm:px-8 z-10">
        {/* Top “Our Process” Button */}
        <button className="text-xs sm:text-sm  bg-gradient-to-b from-[#fff] to-[#6e47c7] bg-clip-text text-transparent border border-[#252424] rounded-full px-4 py-1 mb-3 z-10">
          Our Process
        </button>

        {/* Heading */}
        <h1 className="text-center text-[2rem] sm:text-[3.5rem]   leading-snug  z-10">
          Become a <span className="text-[#A35CA2]  ">Abcd Pro</span> in sec...
        </h1>

        {/* Subtext */}
        <p className="mt-1 text-xs  sm:text-sm text-[#FFFFFFBF] z-10 mb-20">
          🚀 Sign up. Fund. Trade.
        </p>

        {steps.map((step, index) => {
          const lineHeight = getLineHeight(index);

          return (
            <div
              key={index}
              className={`relative w-full max-w-6xl z-10 ${
                index === steps.length - 1 ? "h-[420px]" : "h-[340px]"
              } overflow-hidden`}
            >
              {/* Number + Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div
                  className={`${
                    index === 0 || lineHeight >= LINE_MAX_HEIGHT * 0.3
                      ? "text-white"
                      : "text-[#888]"
                  } text-4xl font-bold z-10 transition-colors duration-200 mb-5`}
                >
                  {step.number}
                </div>

                <div className="relative h-55 w-[3px]">
                  <div className="absolute top-0 w-full h-full bg-[#2c2c2c] rounded-full" />
                  <div
                    className="absolute top-0 w-full transition-all duration-200 rounded-full"
                    style={{
                      height: `${lineHeight}px`,
                      backgroundColor: step.color,
                    }}
                  />
                </div>
                {index === steps.length - 1 && (
                  <div className="mt-10">
                    <button
                      className="relative bg-[#6242A5] text-white cursor-pointer z-50 text-sm font-medium px-5 py-2.5 rounded-2xl 
             transition-all duration-700 ease-in-out 
             hover:bg-gray-100 group overflow-hidden hover:rounded-tr-none"
                    >
                      <span className="relative z-10 flex">
                        Open FREE Account
                        <ArrowUpRight size={18} className="ml-2" />
                      </span>

                      <span
                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 
                   opacity-0 group-hover:opacity-100 
                   transition-opacity duration-700 ease-in-out z-0"
                      ></span>
                    </button>
                  </div>
                )}
              </div>

              {/* Text */}
              {step.align === "right" ? (
                <div className="absolute left-1/2 transform translate-x-8 top-0 ml-10 text-left">
                  <p className="text-sm text-[#aaa]">Step {index + 1}</p>
                  <p className="text-white text-xl font-semibold whitespace-nowrap">
                    {step.title}
                  </p>
                </div>
              ) : (
                <div className="absolute right-1/2 transform -translate-x-8 top-0 mr-10 text-right">
                  <p className="text-sm text-[#aaa]">Step {index + 1}</p>
                  <p className="text-white text-xl font-semibold whitespace-nowrap">
                    {step.title}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </main>
    </>
  );
};

export default HeroPage;
