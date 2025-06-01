import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Calculate scroll progress within the container
      const progress = Math.min(1, Math.max(0, 
        (window.innerHeight - rect.top) / window.innerHeight
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <main 
      ref={containerRef}
      className="-mt-14 z-90 h-[30rem] relative bg-black text-white font-sans overflow-hidden flex flex-col items-center justify-center px-4"
    >
      {/* Heading text with scroll animation */}
      <div className="text-center w-full relative">
        <h1 
          className="text-[48px] sm:text-[90px] lg:text-[100px] text-white font-light leading-none transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(${scrollProgress * 20}vw)`,
            opacity: 1 - scrollProgress * 0.7,
           
          }}
        >
          Trade Anytime, <span className="text-purple-400">Anywhere</span>
        </h1>
      </div>

      {/* QR code container - PRESERVED ALIGNMENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] z-20 flex flex-col items-center group cursor-pointer">
        <div
          className="bg-white p-3 rounded-2xl border-[13px] border-black transition-all duration-500 ease-in-out 
             transform group-hover:scale-110 group-hover:bg-white/90 
             shadow-[0_0_60px_20px_rgba(255,255,255,0.2)] hover:shadow-none
             group-hover:rounded-[28px] cursor-pointer"
        >
          <Image
            src="/images/QR.png"
            alt="QR Code"
            width={180}
            height={180}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Play Store button - PRESERVED ALIGNMENT */}
      <div className="absolute bottom-20 flex flex-col items-center gap-2">
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