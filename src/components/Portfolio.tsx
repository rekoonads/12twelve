"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, X, ExternalLink, Plus } from "lucide-react";

interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    src: "/project1.jpg",
    alt: "Modern Web App",
    title: "Modern Web App",
    category: "Web Development",
    description:
      "A cutting-edge web application built with React and Next.js, featuring a sleek user interface and robust functionality.",
    link: "https://example.com/project1",
  },
  {
    id: "2",
    src: "/project2.jpg",
    alt: "E-commerce Platform",
    title: "E-commerce Platform",
    category: "E-commerce",
    description:
      "A fully-featured e-commerce platform with advanced product filtering, user authentication, and secure payment integration.",
    link: "https://example.com/project2",
  },
  {
    id: "3",
    src: "/project3.jpg",
    alt: "Mobile App Design",
    title: "Mobile App Design",
    category: "UI/UX Design",
    description:
      "A beautiful and intuitive mobile app design for a fitness tracking application, focusing on user experience and clean aesthetics.",
    link: "https://example.com/project3",
  },
  {
    id: "4",
    src: "/project4.jpg",
    alt: "Brand Identity",
    title: "Brand Identity",
    category: "Branding",
    description:
      "A comprehensive brand identity project for a startup, including logo design, color palette, and brand guidelines.",
    link: "https://example.com/project4",
  },
  {
    id: "5",
    src: "/project5.jpg",
    alt: "Social Media Campaign",
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description:
      "An engaging social media campaign that increased brand awareness and user engagement across multiple platforms.",
    link: "https://example.com/project5",
  },
  {
    id: "6",
    src: "/project6.jpg",
    alt: "Data Visualization Dashboard",
    title: "Data Visualization Dashboard",
    category: "Data Analytics",
    description:
      "An interactive dashboard for visualizing complex data sets, built with D3.js and React for a finance company.",
    link: "https://example.com/project6",
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

    const gradients: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }[] = [];

    for (let i = 0; i < 20; i++) {
      gradients.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function drawGradients() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      gradients.forEach((gradient) => {
        const grd = ctx.createRadialGradient(
          gradient.x,
          gradient.y,
          0,
          gradient.x,
          gradient.y,
          gradient.radius
        );
        grd.addColorStop(0, "rgba(139, 92, 246, 0.1)");
        grd.addColorStop(1, "rgba(139, 92, 246, 0)");

        ctx.beginPath();
        ctx.arc(gradient.x, gradient.y, gradient.radius, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        gradient.x += gradient.vx;
        gradient.y += gradient.vy;

        if (gradient.x < 0 || gradient.x > canvas.width)
          gradient.vx = -gradient.vx;
        if (gradient.y < 0 || gradient.y > canvas.height)
          gradient.vy = -gradient.vy;
      });
      requestAnimationFrame(drawGradients);
    }

    drawGradients();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

const PremiumPurplePortfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
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
      className="relative py-20 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 text-white overflow-hidden"
    >
      <BackgroundAnimation />
      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-100"
        >
          Our Portfolio
        </motion.h2>
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex justify-center mb-8 bg-purple-800/30 rounded-full p-1 backdrop-blur-sm">
            <TabsTrigger
              value="All"
              className="rounded-full data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-full data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <AnimatePresence>
            {["All", ...categories].map((tab) => (
              <TabsContent key={tab} value={tab}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {portfolioItems
                    .filter((item) => tab === "All" || item.category === tab)
                    .map((item) => (
                      <motion.div key={item.id} variants={itemVariants} layout>
                        <Card className="bg-purple-900/30 border-purple-500/30 overflow-hidden group backdrop-blur-sm hover:bg-purple-800/30 transition-colors duration-300">
                          <CardContent className="p-0">
                            <div className="relative aspect-video">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-purple-950/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="rounded-full bg-purple-600/50 border-purple-300/50 text-white hover:bg-purple-500/50 hover:border-purple-200/50 transition-colors duration-300"
                                      onClick={() => setSelectedItem(item)}
                                    >
                                      <Plus className="h-6 w-6" />
                                      <span className="sr-only">
                                        View Details
                                      </span>
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[625px] bg-gradient-to-br from-purple-950 to-purple-800 text-white border-purple-400">
                                    <div className="grid gap-4 py-4">
                                      <div className="relative aspect-video">
                                        <Image
                                          src={item.src}
                                          alt={item.alt}
                                          layout="fill"
                                          objectFit="cover"
                                          className="rounded-lg"
                                        />
                                        <Button
                                          className="absolute top-2 right-2 rounded-full p-2 bg-purple-800/50 hover:bg-purple-700/50 transition-colors duration-300"
                                          variant="ghost"
                                          size="icon"
                                          onClick={() => setSelectedItem(null)}
                                        >
                                          <X className="h-4 w-4" />
                                          <span className="sr-only">Close</span>
                                        </Button>
                                      </div>
                                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-100">
                                        {item.title}
                                      </h3>
                                      <Badge
                                        variant="secondary"
                                        className="w-fit bg-purple-700/50 text-purple-100 border border-purple-400/50"
                                      >
                                        {item.category}
                                      </Badge>
                                      <p className="text-purple-100">
                                        {item.description}
                                      </p>
                                      <Button
                                        className="w-full sm:w-auto bg-purple-600/50 hover:bg-purple-500/50 text-white border border-purple-400/50 hover:border-purple-300/50 transition-colors duration-300"
                                        onClick={() =>
                                          window.open(item.link, "_blank")
                                        }
                                      >
                                        Visit Project{" "}
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold mb-2 truncate text-purple-100">
                                {item.title}
                              </h3>
                              <Badge
                                variant="secondary"
                                className="bg-purple-700/50 text-purple-100 border border-purple-400/50"
                              >
                                {item.category}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default PremiumPurplePortfolio;
