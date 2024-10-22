"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Presentation,
  Instagram,
  Megaphone,
} from "lucide-react";

export default function ThreeDHoverHero() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      transition: { duration: 20, repeat: Infinity, repeatType: "reverse" },
    });
  }, [controls]);

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

  return (
    <section className="relative min-h-screen overflow-hidden bg-purple-900 perspective-1000">
      {/* Abstract background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={controls}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, rgba(76, 29, 149, 0.1) 50%, rgba(88, 28, 135, 0.05) 100%)",
          }}
        />
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
            </filter>
          </defs>
        </svg>
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full filter blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 100 + 100}, ${
                Math.random() * 50
              }, ${Math.random() * 100 + 150}, 0.2)`,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
        <motion.div
          className="lg:w-1/2 text-left mb-12 lg:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight"
            style={{
              textShadow: "0 0 20px rgba(139, 92, 246, 0.7)",
              letterSpacing: "-0.05em",
            }}
          >
            Innovate with Digital Excellence
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-purple-100 max-w-xl"
          >
            Embrace cutting-edge technologies to create scalable, efficient, and
            groundbreaking solutions for tomorrow&apos;s challenges.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-purple-500 text-white hover:bg-purple-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Explore Solutions
              <ArrowRight
                className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-purple-500 border-purple-300 hover:bg-purple-800 hover:text-purple-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Our Services
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:w-1/2 grid grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: Presentation, title: "Digital Strategy" },
            { icon: Code, title: "Tech Innovation" },
            { icon: Instagram, title: "Social Engagement" },
            { icon: Megaphone, title: "Market Amplification" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-purple-800 bg-opacity-30 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform perspective-1000 group"
              style={{
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="transform transition-transform duration-300 group-hover:translate-z-12 group-hover:-translate-y-2">
                <item.icon
                  size={48}
                  className="text-purple-300 mb-4 transition-colors group-hover:text-purple-200"
                />
                <h3 className="text-xl font-semibold text-white mb-2 transition-colors group-hover:text-purple-100">
                  {item.title}
                </h3>
                <p className="text-purple-200 transition-colors group-hover:text-purple-50">
                  Pioneering solutions for digital growth and innovation.
                </p>
              </div>
              <div
                className="absolute inset-0 bg-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  transform: "translateZ(-1px)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900 to-transparent" />
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 rounded-full bg-purple-500 opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 rounded-full border-4 border-purple-400 opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
}
