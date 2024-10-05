"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const AnimatedGradientHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(to bottom right, #3b82f6, #6366f1, #8b5cf6)",
        "linear-gradient(to bottom right, #6366f1, #8b5cf6, #d946ef)",
        "linear-gradient(to bottom right, #8b5cf6, #d946ef, #f43f5e)",
        "linear-gradient(to bottom right, #3b82f6, #6366f1, #8b5cf6)",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      animate={controls}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8 animate-pulse">
            <Zap size={64} className="text-yellow-400" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-white"
          >
            Ignite Your Digital Potential
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl"
          >
            Harness the power of cutting-edge technology to transform your
            online presence and drive unprecedented growth.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
              <ArrowRight
                className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black border-white hover:bg-white hover:text-blue-900 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <svg
          className="w-full h-20 fill-current text-white opacity-20"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C200,100 800,100 1000,0 L1000,100 L0,100 Z" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
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
      </motion.div>
    </motion.section>
  );
};

export default AnimatedGradientHero;
