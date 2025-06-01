"use client";
import React, { useEffect, useState } from "react";

const STEP_HEIGHT = 300; // Each step’s vertical scroll region
const LINE_MAX_HEIGHT = 240; // Max height of each vertical line

const HomePage: React.FC = () => {
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
      <div className="absolute inset-0 h-[150rem] z-0">
        <img
          src="/images/framer img.avif"
          alt="Background"
          className="w-full h-[140rem] object-cover"
        />
        <div className="absolute inset-0 h-[150rem] bg-black opacity-70" />
      </div>

      <main className="text-white font-sans flex flex-col items-center justify-start pt-20 relative overflow-x-hidden px-4 sm:px-8 z-10">
        {/* Top “Our Process” Button */}
        <button className="text-xs sm:text-sm text-[#958BCF] border border-[#3f3f3f] rounded-full px-5 py-1 mb-3 z-10">
          Our Process
        </button>

        {/* Heading */}
        <h1 className="text-center text-[2rem] sm:text-[3.5rem] leading-snug font-semibold z-10">
          Become a{" "}
          <span className="text-[#A35CA2] font-medium mr-2">Abcd Pro</span> in
          sec...
        </h1>

        {/* Subtext */}
        <p className="mt-1 text-xs sm:text-sm text-[#FFFFFFBF] z-10 mb-20">
          🚀 Sign up. Fund. Trade.
        </p>

        {steps.map((step, index) => {
          const lineHeight = getLineHeight(index);
          const numberIsWhite = lineHeight >= LINE_MAX_HEIGHT * 0.3;

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
                    numberIsWhite ? "text-white" : "text-[#888]"
                  } text-4xl font-bold z-10 transition-colors duration-200 mb-5`}
                >
                  {step.number}
                </div>

                <div className="relative h-55 w-[4px]">
                  <div className="absolute top-0 w-full h-full bg-[#2c2c2c] rounded-full" />
                  <div
                    className="absolute top-0 w-full transition-all duration-200 rounded-full"
                    style={{
                      height: `${lineHeight}px`,
                      backgroundColor: step.color,
                    }}
                  />
                </div>

                {/* Show button on last step */}
                {index === steps.length - 1 && (
                  <div className="mt-10">
                    <button className="relative z-10 px-6 py-3 text-white text-sm font-semibold rounded-md bg-[#A35CA2] hover:bg-[#924b91] border border-white">
                      Open Free Account
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
  <button className="relative bg-black text-white z-50 text-sm font-medium px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all group overflow-hidden">
            <span className="relative z-10">Are you Next? ↗</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </button>
export default HomePage;





















// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { ArrowUpRight } from "lucide-react";

// type BlurredTextProps = {
//   text: string;
//   scrollProgress: number;
//   direction: "up" | "down";
//   isFirstLine?: boolean;
// };

// const BlurredText: React.FC<BlurredTextProps> = ({
//   text,
//   scrollProgress,
//   direction,
//   isFirstLine = false,
// }) => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {text.split("").map((char, index) => {
//         let blurAmount = 0;
//         const charPosition = index / text.length;

//         if (direction === "down") {
//           blurAmount = Math.max(0, 8 * (charPosition - scrollProgress * 1.2));
//         } else {
//           blurAmount = Math.max(
//             0,
//             8 * (1 - charPosition - scrollProgress * 1.2)
//           );
//         }

//         return (
//           <span
//             key={index}
//             className="inline-block"
//             style={{
//               filter: `blur(${blurAmount}px)`,
//             }}
//           >
//             {char}
//           </span>
//         );
//       })}
//     </div>
//   );
// };

// const HeadingWithBlur = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const lastScrollY = useRef(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

//   useEffect(() => {
//     const updateBlur = () => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       const scrollY = window.scrollY;

//       setScrollDirection(scrollY > lastScrollY.current ? "down" : "up");
//       lastScrollY.current = scrollY;

//       const windowHeight = window.innerHeight;
//       const visibleHeight =
//         Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
//       const visibilityRatio = Math.min(1, visibleHeight / rect.height);
//       setScrollProgress(1 - visibilityRatio);
//     };

//     const scrollHandler = () => requestAnimationFrame(updateBlur);
//     window.addEventListener("scroll", scrollHandler);
//     updateBlur();

//     return () => window.removeEventListener("scroll", scrollHandler);
//   }, []);

//   return (
//     <div ref={containerRef} className="mb-4">
//       <h1 className="text-[2rem] sm:text-[3.5rem]  leading-tight">
//         <BlurredText
//           text="We've Paid Out Over"
//           scrollProgress={scrollProgress}
//           direction={scrollDirection}
//           isFirstLine
//         />
//         <div className="">
//           <BlurredText
//             text="$1M to Traders"
//             scrollProgress={scrollProgress}
//             direction={scrollDirection}
//           />
//         </div>
//       </h1>
//     </div>
//   );
// };

// const PayoutPage: React.FC = () => {
//   const [payout, setPayout] = useState(999716);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPayout((prev) => prev + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main className="relative min-h-screen bg-black text-white font-sans overflow-hidden flex flex-col justify-center items-center text-center px-4">
//       {/* MODIFIED VIDEO - Increased height and adjusted positioning */}
//       {/* Background video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-[20%] left-0 w-full h-[170vh] object-cover z-30 opacity-70 mix-blend-screen pointer-events-none"
//       >
//         <source src="/images/framer-vidio.mp4" type="video/mp4" />
//       </video>

//       {/* Foreground content */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-24 w-full max-w-3xl">
//         {/* Badge */}

//         <button className="text-xs sm:text-sm  bg-gradient-to-b from-[#fff] to-[#6e47c7] bg-clip-text text-transparent border border-[#252424] rounded-full px-4 py-1 mb-3 z-10">
//           Payouts
//         </button>
//         {/* Heading */}
//         <HeadingWithBlur />

//         {/* Subtext */}
//         <p className="text-sm text-white/70  max-w-md">
//           Your Trust is Our Fuel—Power Up with Abcd
//         </p>

//         {/* Live Payout Number */}
//         <div className="text-[60px] sm:text-[200px] font-normal tracking-tight flex items-center justify-center z-10 bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
//           <span>${payout.toLocaleString("en-US")}</span>
//           <span className="bg-gradient-to-b from-[#a3a2a2] to-[#3e2f61] bg-clip-text text-transparent px-4 py-1 mb-3">
//             +
//           </span>
//         </div>

//         {/* CTA Button */}
//         <button className="snake-border relative  px-6 py-2.5 text-white text-sm font-semibold rounded-2xl  bg-black hover:bg-[#924b91] flex items-center gap-2">
//           <span className="relative ">Are you Next</span>
//           <ArrowUpRight size={18} className="relative z-10" />
//         </button>
//       </div>
//     </main>
//   );
// };

// export default PayoutPage;
