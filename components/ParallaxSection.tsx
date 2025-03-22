"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import StatCard from "./StatCard";

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div 
      ref={ref} 
      className="parallax-container relative mb-16" 
      style={{ opacity, height: "500px" }}
    >
      <motion.div className="absolute inset-0 w-full h-full" style={{ y }}>
        <Image
          src="/parallax-image.png"
          alt="Earth in a glass dome with industrial pollution"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </motion.div>

      {/* Green stat card in the top right */}
      <StatCard
        value="3X"
        description="ESG High Performers Deliver A Higher Total Shareholder Return"
        isGreen={true}
        position={{ top: "140px", right: "20px" }}
        width="250px"
      />

      {/* 98% card in the middle right */}
      <StatCard
        value="98%"
        description="Of CEOs Agree Sustainability Is Their Responsibility"
        position={{ top: "280px", right: "60px" }}
        width="200px"
      />

      {/* 18% card in the bottom right */}
      <StatCard
        value="18%"
        description="Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050"
        position={{ top: "380px", right: "100px" }}
        width="220px"
      />

      {/* 37% card in the bottom left */}
      <StatCard
        value="37%"
        description="Of The World's Largest Companies Have A Public Net Zero Target, Nearly All Are Off Track"
        position={{ top: "420px", left: "240px" }}
        width="250px"
      />
    </motion.div>
  );
}

