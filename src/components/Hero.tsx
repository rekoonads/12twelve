"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cpu,
  Wifi,
  Database,
  Cloud,
  Presentation,
  Code,
  Instagram,
  Megaphone,
} from "lucide-react";

const FuturisticTechHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null); // Type added
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Event type added
      const { clientX, clientY } = event;
      const { left, top, width, height } =
        containerRef.current!.getBoundingClientRect();
      mouseX.set(clientX - left - width / 2);
      mouseY.set(clientY - top - height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500">
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2) rotate(0)"
            >
              <path
                d="M25 17.3L0 0v34.6l25 17.3 25-17.3V0L25 17.3z"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-300 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              y: [null, Math.random() * -window.innerHeight],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="mb-8 grid grid-cols-2 gap-4"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover="hover"
              variants={iconVariants}
              className="bg-purple-800 p-4 rounded-lg"
            >
              <Presentation size={48} className="text-purple-300 mx-auto" />
              <p className="text-purple-200 mt-2">Digital Marketing</p>
            </motion.div>
            <motion.div
              whileHover="hover"
              variants={iconVariants}
              className="bg-purple-800 p-4 rounded-lg"
            >
              <Code size={48} className="text-purple-300 mx-auto" />
              <p className="text-purple-200 mt-2">Website Development</p>
            </motion.div>
            <motion.div
              whileHover="hover"
              variants={iconVariants}
              className="bg-purple-800 p-4 rounded-lg"
            >
              <Instagram size={48} className="text-purple-300 mx-auto" />
              <p className="text-purple-200 mt-2">Social Media Marketing</p>
            </motion.div>
            <motion.div
              whileHover="hover"
              variants={iconVariants}
              className="bg-purple-800 p-4 rounded-lg"
            >
              <Megaphone size={48} className="text-purple-300 mx-auto" />
              <p className="text-purple-200 mt-2">SEO Optimization</p>
            </motion.div>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-white"
            style={{
              textShadow: "0 0 20px rgba(139, 92, 246, 0.7)",
              letterSpacing: "-0.05em",
            }}
          >
            Revolutionize Your Tech Stack
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-purple-200 max-w-2xl"
          >
            Harness the power of cutting-edge technologies to build scalable,
            efficient, and innovative solutions for the future.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-purple-500 text-white hover:bg-purple-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Explore Technologies
              <ArrowRight
                className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-purple-500 border-purple-300 hover:bg-purple-800 hover:text-purple-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:-rotate-1"
            >
              View Case Studies
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900 to-transparent" />
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ y: 0 }}
        animate={{ y: [-10, 10] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <ArrowRight size={32} className="text-purple-300 rotate-90" />
      </motion.div>
    </section>
  );
};

export default FuturisticTechHero;
