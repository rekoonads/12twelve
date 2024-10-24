"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ParticleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }[] = [];
    const particleCount = 150;

    const colors = ["#8B5CF6", "#A78BFA", "#C4B5FD", "#DDD6FE"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      ctx.strokeStyle = "rgba(139, 92, 246, 0.1)";
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development.",
      image: "/webdev.jpg",
    },
    {
      title: "Mastering React Hooks",
      excerpt:
        "Learn how to leverage the power of React Hooks to build efficient and scalable applications.",
      image: "/devops.jpg",
    },
    {
      title: "The Art of UI Design",
      excerpt:
        "Discover the principles and techniques behind creating stunning user interfaces.",
      image: "/uiux.jpg",
    },
    {
      title: "Optimizing Website Performance",
      excerpt:
        "Tips and tricks to boost your website's speed and overall performance.",
      image: "/perform.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
    controls.start({ opacity: [0, 1], x: [50, 0] });
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length
    );
    controls.start({ opacity: [0, 1], x: [-50, 0] });
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      <ParticleAnimation />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Discover Our Latest Insights
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="overflow-hidden rounded-3xl shadow-2xl bg-purple-900 bg-opacity-30 backdrop-blur-lg border border-purple-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <motion.img
                  src={blogPosts[currentIndex].image}
                  alt={blogPosts[currentIndex].title}
                  className="w-full md:w-1/2 h-64 md:h-[450px] object-cover"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="p-10 md:w-1/2">
                  <motion.h3
                    className="text-3xl md:text-4xl font-semibold text-purple-200 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {blogPosts[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    className="text-purple-100 mb-8 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {blogPosts[currentIndex].excerpt}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Link href="/blog">
                      <Button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700 transition-all duration-300 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Read More <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2 left-4 md:-left-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-purple-800 bg-opacity-50 hover:bg-opacity-70 text-purple-200 border-purple-400 rounded-full p-3 shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </motion.div>
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2 right-4 md:-right-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-purple-800 bg-opacity-50 hover:bg-opacity-70 text-purple-200 border-purple-400 rounded-full p-3 shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </motion.div>
        </div>
        <div className="flex justify-center mt-12">
          {blogPosts.map((_, index) => (
            <motion.div
              key={index}
              className={`h-3 w-3 rounded-full mx-2 cursor-pointer ${
                index === currentIndex ? "bg-purple-300" : "bg-purple-700"
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
