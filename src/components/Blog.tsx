"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
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
    }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
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
        ctx.fillStyle = "rgba(147, 51, 234, 0.3)";
        ctx.fill();
      });

      ctx.strokeStyle = "rgba(147, 51, 234, 0.1)";
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
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
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length
    );
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      <ParticleAnimation />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Blogs
        </motion.h2>
        <div className="relative">
          <motion.div
            className="overflow-hidden rounded-2xl shadow-2xl bg-purple-900 bg-opacity-30 backdrop-blur-lg border border-purple-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.img
                src={blogPosts[currentIndex].image}
                alt={blogPosts[currentIndex].title}
                className="w-full md:w-1/2 h-64 md:h-96 object-cover"
                key={currentIndex}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="p-8 md:w-1/2">
                <motion.h3
                  className="text-2xl md:text-3xl font-semibold text-purple-200 mb-4"
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {blogPosts[currentIndex].title}
                </motion.h3>
                <motion.p
                  className="text-purple-100 mb-6"
                  key={`excerpt-${currentIndex}`}
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
                    <Button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700 transition-all duration-300">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-purple-800 bg-opacity-50 hover:bg-opacity-70 text-purple-200 border-purple-400 rounded-full p-2"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-purple-800 bg-opacity-50 hover:bg-opacity-70 text-purple-200 border-purple-400 rounded-full p-2"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {blogPosts.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? "bg-purple-300" : "bg-purple-700"
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
