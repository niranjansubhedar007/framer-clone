"use client";
import React from "react";
import { motion } from "framer-motion";

const PlanPage: React.FC = () => {
  const features = [
    "Who It's For",
    "Initial Capital Requirement",
    "Spread Advantage",
    "Trading Fees",
    "Leverage Capacity",
    "Minimum Lot Size",
    "Trade Execution Limit",
    "Open Position Capacity",
    "Stop Out Threshold",
    "Margin Call Activation",
    "Swap Policy",
    "Risk Exposure",
    "Asset Options",
  ];

  const plans = [
    {
      name: "Abcd Vintage",
      desc: "Perfect for balanced, all-level traders looking for consistency and solid growth.",
      values: [
        "$10%",
        "from 0.2 pips",
        "No Commission",
        "1:Unlimited",
        "0.01",
        "200 trades during peak hours",
        "Unlimited",
        "0%",
        "30%",
        "0%",
        "Moderate",
        "Forex, Crypto, Stocks, Commodities, Indices",
      ],
    },
    {
      name: "Abcd Cent",
      desc: "Designed for beginners ready to step into the trading world with minimal risk.",
      values: [
        "$10",
        "from 0.3 pips",
        "Zero Commission",
        "1:Unlimited",
        "Same",
        "200 trades during peak hours",
        "Unlimited",
        "0%",
        "30%",
        "0%",
        "Low",
        "Forex, Crypto, Stocks, Commodities, Indices",
      ],
    },
    {
      name: "Abcd Pro",
      desc: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
      values: [
        "$500",
        "from 0.1 pips",
        "No Commission",
        "1:Unlimited",
        "Same",
        "200 trades during peak hours",
        "Unlimited",
        "0%",
        "30%",
        "0%",
        "High",
        "Forex, Crypto, Stocks, Commodities, Indices",
      ],
    },
  ];
  const heading = "Compare your Abcd plan";

  const wordVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <main className="text-white font-sans bg-black min-h-screen px-4 sm:px-10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center py-10">
          <button className="text-xs sm:text-sm  bg-gradient-to-b from-[#fff] to-[#6e47c7] bg-clip-text text-transparent border border-[#252424] rounded-full px-4 py-1 mb-3 z-10">
            Compare Plans
          </button>
          <motion.h2
            initial="hidden"
            animate="visible"
            className="text-[2rem] sm:text-[3.5rem] flex flex-wrap justify-center gap-2"
          >
            {heading.split(" ").map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                className={word === "Abcd" ? "text-[#A35CA2]" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <p className="text-xs sm:text-sm text-[#FFFFFFBF] mt-1  mb-3">
            Flexible Deposits for Every Trader
          </p>
        </div>

        {/* Table Layout */}
        <div className="overflow-x-auto lg:text-left md:text-left text-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            {/* Feature Labels */}
            <div className="flex flex-col text-sm text-[#FFFFFFBF] pt-16">
              {features.map((feature, idx) => (
                <React.Fragment key={idx}>
                  <div className="py-3">{feature}</div>
                  {idx < features.length - 1 && (
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2c2c2c] to-transparent" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {plans.map((plan, i) => {
              const isCent = i === 1;

              return (
                <div
                  key={i}
                  className={`relative rounded-xl p-6 flex flex-col justify-between shadow-md overflow-hidden ${
                    isCent
                      ? "bg-black"
                      : "bg-gradient-to-b from-[#100918] to-[#070707]"
                  }`}
                >
                  {/* Animated Border ONLY for Abcd Cent */}
                  {isCent && (
                    <>
                      <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-400 to-indigo-500 animate-moveBorderTop z-20" />
                      <span className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-purple-400 to-indigo-500 animate-moveBorderRight z-20" />
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-l from-purple-400 to-indigo-500 animate-moveBorderBottom z-20" />
                      <span className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-purple-400 to-indigo-500 animate-moveBorderLeft z-20" />
                    </>
                  )}

                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-light mb-2">{plan.name}</h3>
                    <p className="text-xs text-[#FFFFFFBF] mb-6 font-semibold mt-5">
                      {plan.desc}
                    </p>
                    <div className="flex flex-col text-sm text-[#FFFFFFBF]">
                      {plan.values.map((v, idx) => (
                        <React.Fragment key={idx}>
                          <div className="py-3">{v}</div>
                          {idx < plan.values.length - 1 && (
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#5f5f5f] to-transparent" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <button className="group cursor-pointer mt-6 relative bg-gradient-to-b from-[#6242A5] to-[#6242A5] text-[#FFFFFFBF] text-sm px-4 py-2 rounded-xl z-10 mx-auto overflow-hidden">
                    <span className="relative z-10 transition-colors duration-300">
                      Start Trading
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-0"></span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlanPage;
