"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

const Footer: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCorner, setHoveredCorner] = useState<string | null>(null);

  const cornerRotation: Record<string, string> = {
    tl: "rotateX(8deg) rotateY(-8deg)",
    tr: "rotateX(8deg) rotateY(8deg)",
    bl: "rotateX(-8deg) rotateY(-8deg)",
    br: "rotateX(-8deg) rotateY(8deg)",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / window.innerHeight)
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      ref={containerRef}
      className="lg:-mt-14 md:-mt-14 z-90 lg:h-[35rem] md:h-[30rem] h-[20rem] relative bg-black text-white font-sans overflow-hidden flex flex-col items-center justify-center px-4"
    >
      {/* Heading text with scroll animation */}
      <div className="text-center w-full relative">
        <h1
          className="whitespace-nowrap text-[48px] sm:text-[90px] lg:text-[100px] font-light leading-none transition-transform duration-500 ease-out shadow-none drop-shadow-none"
          style={{
            transform: `translateX(${scrollProgress * 5}vw)`,
          }}
        >
          Trade Anytime, <span className="text-purple-400">Anywhere</span>
        </h1>
      </div>

      {/* QR code with corner hover tilt */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] z-20 flex flex-col items-center perspective group">
        {/* Invisible hover zones */}
        {['tl', 'tr', 'bl', 'br'].map((pos) => (
          <div
            key={pos}
            onMouseEnter={() => setHoveredCorner(pos)}
            onMouseLeave={() => setHoveredCorner(null)}
            className={clsx(
              'absolute w-1/2 h-1/2 z-30',
              pos === 'tl' && 'top-0 left-0',
              pos === 'tr' && 'top-0 right-0',
              pos === 'bl' && 'bottom-0 left-0',
              pos === 'br' && 'bottom-0 right-0'
            )}
          />
        ))}

        {/* QR Image container with transform */}
        <div
          className={clsx(
            "p-3 rounded-3xl border-[13px] border-black transition-transform duration-300 ease-in-out bg-white",
            "group-hover:scale-110 group-hover:bg-white shadow-[0_0_60px_20px_rgba(255,255,255,0.2)] hover:shadow-none"
          )}
          style={{
            transform: hoveredCorner
              ? `${cornerRotation[hoveredCorner]} scale(1.1)`
              : "rotateX(0deg) rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src="/images/QR.png"
            alt="QR Code"
            width={170}
            height={180}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Play Store button */}
      <div className="absolute lg:bottom-15 md:bottom-10 bottom-2 flex flex-col items-center gap-2">
        <Image
          src="/images/playStore.avif"
          alt="Play Store"
          width={120}
          height={45}
        />
      </div>
    </main>
  );
};

export default Footer;
