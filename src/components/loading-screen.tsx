"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ParticleSystem: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
            y: [0, Math.random() * -100 - 50],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const LoadingScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = event;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      mouseX.set(clientX - left - width / 2);
      mouseY.set(clientY - top - height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 10;
        return next > 100 ? 100 : next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 overflow-hidden perspective-1000"
    >
      <ParticleSystem />

      <motion.div
        className="relative"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Animated hexagon */}
        <svg className="w-64 h-64" viewBox="0 0 100 100">
          <defs>
            <linearGradient
              id="hexGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <motion.path
            d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z"
            fill="url(#hexGradient)"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="0.5"
            filter="url(#glow)"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M50 10 L83.3 30 V70 L50 90 L16.7 70 V30 Z"
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          />
        </svg>

        {/* Animated text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-white text-4xl font-bold tracking-wider perspective-1000">
            {"LOADING".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                }}
                style={{
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Orbiting particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              transformStyle: "preserve-3d",
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1, 0],
              rotateY: [0, 360],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear",
            }}
          >
            <motion.div
              className="w-full h-full bg-purple-300 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2 bg-purple-900 overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(20px)",
          }}
        >
          <motion.div
            className="h-full bg-purple-300"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-semibold">
          {Math.round(progress)}%
        </div>
      </motion.div>

      {/* Pulsating background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-500 opacity-10 rounded-full blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
