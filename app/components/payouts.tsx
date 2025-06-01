"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

type BlurredTextProps = {
  text: string;
  scrollProgress: number;
  direction: "up" | "down";
  isFirstLine?: boolean;
};

const BlurredText: React.FC<BlurredTextProps> = ({
  text,
  scrollProgress,
  direction,
  isFirstLine = false,
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {text.split("").map((char, index) => {
        let blurAmount = 0;
        const charPosition = index / text.length;

        if (direction === "down") {
          blurAmount = Math.max(0, 8 * (charPosition - scrollProgress * 1.2));
        } else {
          blurAmount = Math.max(
            0,
            8 * (1 - charPosition - scrollProgress * 1.2)
          );
        }

        return (
          <span
            key={index}
            className="inline-block"
            style={{
              filter: `blur(${blurAmount}px)`,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

const HeadingWithBlur = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const updateBlur = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;

      setScrollDirection(scrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = scrollY;

      const windowHeight = window.innerHeight;
      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibilityRatio = Math.min(1, visibleHeight / rect.height);
      setScrollProgress(1 - visibilityRatio);
    };

    const scrollHandler = () => requestAnimationFrame(updateBlur);
    window.addEventListener("scroll", scrollHandler);
    updateBlur();

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div ref={containerRef} className="mb-4">
      <h1 className="text-[2rem] sm:text-[3.5rem] leading-tight">
        <BlurredText
          text="We've Paid Out Over"
          scrollProgress={scrollProgress}
          direction={scrollDirection}
          isFirstLine
        />
        <div>
          <BlurredText
            text="$1M to Traders"
            scrollProgress={scrollProgress}
            direction={scrollDirection}
          />
        </div>
      </h1>
    </div>
  );
};

const PayoutPage: React.FC = () => {
  const [payout, setPayout] = useState(999716);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPayout((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative bg-black text-white font-sans overflow-hidden flex flex-col justify-center items-center text-center px-4">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[20%] left-0 w-full h-[170vh] object-cover z-30 opacity-70 mix-blend-screen pointer-events-none"
      >
        <source src="/images/framer-vidio.mp4" type="video/mp4" />
      </video>

      {/* Foreground content */}
      <div className="relative flex flex-col items-center justify-center py-24 w-full max-w-3xl">
        {/* Badge */}
        <button className="text-xs sm:text-sm bg-gradient-to-b from-[#fff] to-[#6e47c7] bg-clip-text text-transparent border border-[#252424] rounded-full px-4 py-1 mb-3 z-10">
          Payouts
        </button>

        {/* Heading with Blur */}
        <HeadingWithBlur />

        {/* Subtext */}
        <p className="text-sm text-white/70 max-w-md">
          Your Trust is Our Fuel—Power Up with Abcd
        </p>

        {/* Live Payout Number */}
        <div className="text-[50px] lg:text-[200px] md:text-[120px] font-normal tracking-tight flex items-center justify-center z-10 bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
          <span>${payout.toLocaleString("en-US")}</span>
          <span className="bg-gradient-to-b from-[#a3a2a2] to-[#3e2f61] bg-clip-text text-transparent px-4 py-1 mb-3">
            +
          </span>
        </div>

        {/* CTA Button */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-black text-white cursor-pointer z-50 text-sm font-medium px-5 py-2.5 rounded-2xl
                     transition-all duration-700 ease-in-out  group overflow-hidden hover:rounded-tr-none
                     flex items-center gap-2"
        >
          <span className="relative z-10 flex items-center">
            Are you Next?
            {isHovered ? (
              <ArrowRight
                size={18}
                className="ml-2 transition-all duration-700 ease-in-out "
              />
            ) : (
              <ArrowUpRight
                size={18}
                className="ml-2 transition-all duration-700 ease-in-out "
              />
            )}
          </span>

          <span
            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100
                       transition-opacity duration-700 ease-in-out z-0"
          ></span>
        </button>
      </div>
    </main>
  );
};

export default PayoutPage;
