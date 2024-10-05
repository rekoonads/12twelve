"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, BarChart, Search, Users, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const cards = [
    {
      title: "Effective Strategies",
      description:
        "Develop tailored marketing strategies that drive results and maximize your ROI.",
      icon: BarChart,
    },
    {
      title: "Targeted Visibility",
      description:
        "Increase your online presence and reach your ideal audience across all platforms.",
      icon: Search,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Make informed decisions with our advanced analytics and reporting tools.",
      icon: Users,
    },
    {
      title: "Amplified Reach",
      description:
        "Expand your brand's influence and engage with a wider, more relevant audience.",
      icon: Megaphone,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-300 mb-4">
            About 12twelve
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "12rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"
          ></motion.div>
          <p className="mt-6 text-xl text-purple-100 max-w-3xl mx-auto">
            Empowering businesses with innovative marketing solutions and
            data-driven strategies for unparalleled growth and success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 hover:border-purple-300/40 transition-all duration-300 group overflow-hidden h-full">
                <CardContent className="p-6 relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="mb-4 relative z-10"
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                      rotate: hoveredCard === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-purple-500/20 p-3 rounded-full inline-block">
                      <card.icon className="w-6 h-6 text-purple-200" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-purple-100 mb-2 relative z-10">
                    {card.title}
                  </h3>
                  <p className="text-purple-200 mb-4 relative z-10">
                    {card.description}
                  </p>
                  <motion.div
                    animate={{ x: hoveredCard === index ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      variant="link"
                      className="text-purple-300 hover:text-white p-0 relative z-10"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Started with 12twelve
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
