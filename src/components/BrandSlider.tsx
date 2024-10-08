"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import acmeLogo from "../../public/logo-acme.png";
import quantumLogo from "../../public/logo-quantum.png";
import echoLogo from "../../public/logo-echo.png";
import celestialLogo from "../../public/logo-celestial.png";
import pulseLogo from "../../public/logo-pulse.png";
import apexLogo from "../../public/logo-apex.png";

const logos = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const BrandSlider = () => {
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const animateSlider = () => {
      controls.start({
        x: [0, -slider.scrollWidth / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    };

    animateSlider();
  }, [controls]);

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-purple-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-indigo-900 to-transparent z-10" />
          <motion.div
            ref={sliderRef}
            className="flex gap-16 py-8"
            animate={controls}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="flex-none group"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative w-40 h-40 bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 group-hover:bg-opacity-20 group-hover:shadow-lg group-hover:shadow-purple-500/50 border border-purple-300/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    layout="fill"
                    objectFit="contain"
                    className="filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300 ease-in-out drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
