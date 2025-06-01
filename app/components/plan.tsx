"use client";
import React from "react";

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

  return (
    <main className="text-white font-sans bg-black min-h-screen px-4 sm:px-10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center py-10">
          <button className="text-xs text-[#958BCF] border border-[#3f3f3f] rounded-full px-4 py-1 mb-5">
            Compare Plans
          </button>
          <h2 className="text-[2rem] sm:text-[3rem] font-semibold">
            Compare your <span className="text-[#A35CA2]">Abcd</span> plan
          </h2>
          <p className="text-xs sm:text-sm text-[#FFFFFFBF] mt-1 font-semibold mb-3">
            Flexible Deposits for Every Trader
          </p>
        </div>

        {/* Table Layout */}
        <div className="overflow-x-auto">
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

            {/* Pricing Cards */}
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-xl p-6 flex flex-col justify-between shadow-md overflow-hidden ${
                  i === 0
                    ? "bg-gradient-to-b from-[#100918] to-[#070707]"
                    : i === 1
                    ? "bg-black"
                    : "bg-gradient-to-b from-[#100918]  to-[#070707]"
                }`}
              >
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-light mb-2  ">{plan.name}</h3>
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
                <button className="mt-6 bg-gradient-to-b  text- from-[#6242A5]   to-[#6242A5] text-[#FFFFFFBF] text-sm px-4 py-2 rounded-xl relative z-10 mx-auto">
                  Start Trading
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlanPage;
