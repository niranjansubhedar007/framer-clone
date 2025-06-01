
"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
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
          blurAmount = Math.max(0, 8 * (1 - charPosition - scrollProgress * 1.2));
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
      <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
        <BlurredText
          text="We've Paid Out Over"
          scrollProgress={scrollProgress}
          direction={scrollDirection}
          isFirstLine
        />
        <div className="mt-2">
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

  useEffect(() => {
    const interval = setInterval(() => {
      setPayout((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-hidden flex flex-col justify-center items-center text-center px-4">

      {/* Background Video at bottom */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute bottom-0 left-0 w-full h-[100vh] object-cover z-0 opacity-50"
      >
        <source src="/images/framer-vidio.mp4" type="video/mp4" />
      </video>

  

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col items-center justify-center py-24 w-full max-w-3xl">

        {/* Badge */}
        <span className="inline-block text-xs text-white border border-white/30 rounded-full px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-sm">
          Payouts
        </span>

        {/* Heading */}
        <HeadingWithBlur />

        {/* Subtext */}
        <p className="text-sm sm:text-base text-white/70 mb-12 max-w-md">
          Your Trust is Our Fuel—Power Up with Abcd
        </p>

        {/* Live Payout Number */}
        <div className="text-[60px] sm:text-[200px] font-light text-white mb-10 tracking-tight flex items-center justify-center">
          <span>${payout.toLocaleString("en-US")}</span>
          <span className="text-purple-400 ml-2">+</span>
        </div>

        {/* CTA Button */}
              <div className="mt-10">
          <button className="snake-border relative z-10 px-6 py-2.5 text-white text-sm font-semibold rounded-2xl bg-black hover:bg-[#924b91] flex items-center gap-2">
            <span className="relative z-10">Are you Next</span>
            <ArrowUpRight size={18} className="relative z-10" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default PayoutPage;
