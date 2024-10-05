"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight, X } from "lucide-react";

interface PortfolioItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    src: "/project1.jpg",
    alt: "Project 1",
    title: "Modern Web App",
    category: "Web Development",
    description:
      "A cutting-edge web application built with React and Next.js, featuring a sleek user interface and robust functionality.",
  },
  {
    src: "/project2.jpg",
    alt: "Project 2",
    title: "E-commerce Platform",
    category: "E-commerce",
    description:
      "A fully-featured e-commerce platform with advanced product filtering, user authentication, and secure payment integration.",
  },
  {
    src: "/project3.jpg",
    alt: "Project 3",
    title: "Mobile App Design",
    category: "UI/UX Design",
    description:
      "A beautiful and intuitive mobile app design for a fitness tracking application, focusing on user experience and clean aesthetics.",
  },
  {
    src: "/project4.jpg",
    alt: "Project 4",
    title: "Brand Identity",
    category: "Branding",
    description:
      "A comprehensive brand identity project for a startup, including logo design, color palette, and brand guidelines.",
  },
  {
    src: "/project5.jpg",
    alt: "Project 5",
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description:
      "An engaging social media campaign that increased brand awareness and user engagement across multiple platforms.",
  },
  {
    src: "/project6.jpg",
    alt: "Project 6",
    title: "Data Visualization Dashboard",
    category: "Data Analytics",
    description:
      "An interactive dashboard for visualizing complex data sets, built with D3.js and React for a finance company.",
  },
];

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();

    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function drawParticles() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width)
          particle.vx = -particle.vx;
        if (particle.y < 0 || particle.y > canvas.height)
          particle.vy = -particle.vy;
      });
      requestAnimationFrame(drawParticles);
    }

    drawParticles();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

const AnimatedPurplePortfolio: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter
    ? portfolioItems.filter((item) => item.category === filter)
    : portfolioItems;

  const categories = Array.from(
    new Set(portfolioItems.map((item) => item.category))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="portfolio"
      className="relative py-20 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden"
    >
      <BackgroundAnimation />
      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Our Portfolio
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            variant={filter === null ? "secondary" : "outline"}
            onClick={() => setFilter(null)}
            className="bg-purple-600 text-white hover:bg-purple-700"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "secondary" : "outline"}
              onClick={() => setFilter(category)}
              className="bg-purple-600 text-white hover:bg-purple-700"
            >
              {category}
            </Button>
          ))}
        </motion.div>
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                      onClick={() => setSelectedItem(item)}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={400}
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-purple-800 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-lg font-semibold text-center px-4">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[625px] bg-purple-800 text-white">
                    <div className="grid gap-4 py-4">
                      <div className="relative">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <Button
                          className="absolute top-2 right-2 rounded-full p-2"
                          variant="ghost"
                          onClick={() => setSelectedItem(null)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-sm text-purple-300">{item.category}</p>
                      <p className="text-purple-100">{item.description}</p>
                      <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white">
                        View Project <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AnimatedPurplePortfolio;
