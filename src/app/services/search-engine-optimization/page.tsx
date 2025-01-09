"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Search,
  BarChart,
  Target,
  Zap,
  Users,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

const seoServices = [
  {
    icon: Search,
    title: "Keyword Research",
    description:
      "Identify high-value keywords to target and improve your search rankings.",
  },
  {
    icon: BarChart,
    title: "On-Page SEO",
    description:
      "Optimize your website's content and structure for better search engine visibility.",
  },
  {
    icon: Target,
    title: "Link Building",
    description:
      "Build high-quality backlinks to increase your site's authority and rankings.",
  },
  {
    icon: Zap,
    title: "Technical SEO",
    description:
      "Improve your website's technical aspects for better crawling and indexing.",
  },
  {
    icon: Users,
    title: "Local SEO",
    description:
      "Boost your visibility in local search results to attract nearby customers.",
  },
  {
    icon: Globe,
    title: "International SEO",
    description:
      "Expand your global reach with multilingual and multi-regional SEO strategies.",
  },
];

const RocketGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#D8B4FE" />
      </linearGradient>
    </defs>
    <motion.path
      d="M100 180 L120 140 L100 20 L80 140 Z"
      fill="url(#rocketGradient)"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
    <motion.circle
      cx="100"
      cy="140"
      r="10"
      fill="#F9A8D4"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 0.5, delay: 1 }}
    />
    <motion.path
      d="M70 170 Q100 140 130 170"
      stroke="#8B5CF6"
      strokeWidth="4"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
    />
    {[1, 2, 3].map((_, index) => (
      <motion.circle
        key={index}
        cx={100 + (index - 1) * 20}
        cy="170"
        r="3"
        fill="#D8B4FE"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.5 + index * 0.2 }}
      />
    ))}
  </svg>
);

const GraphicSEO = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <motion.circle
      cx="100"
      cy="100"
      r="80"
      stroke="#8B5CF6"
      strokeWidth="4"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M60,100 L90,130 L140,80"
      stroke="#D8B4FE"
      strokeWidth="4"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
    />
    <motion.circle
      cx="100"
      cy="100"
      r="30"
      fill="#8B5CF6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
    />
  </svg>
);

export default function SEOPage() {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <Navbar />
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-purple-900 opacity-70 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dominate Search Results with Expert SEO
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate your online presence, increase organic traffic, and outrank
            your competitors with our data-driven SEO strategies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-purple-100 mr-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Boost Your Rankings
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-white hover:text-purple-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-8 h-8 rotate-90" />
        </motion.div>
      </header>

      <main>
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our SEO Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-12 h-12 text-purple-300 mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-purple-200">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our SEO Process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Analyze",
                  description:
                    "We conduct a thorough analysis of your website and competitors.",
                },
                {
                  title: "Strategize",
                  description:
                    "We develop a customized SEO strategy tailored to your goals.",
                },
                {
                  title: "Optimize",
                  description:
                    "We implement on-page and off-page optimizations.",
                },
                {
                  title: "Monitor",
                  description:
                    "We continuously track and refine our approach for best results.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-3xl font-bold">{index + 1}</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-purple-200">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          ref={containerRef}
          className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              y,
              opacity,
            }}
          />
          <div className="absolute inset-0 bg-purple-900 opacity-80 z-10"></div>
          <div className="max-w-7xl mx-auto relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  className="text-4xl sm:text-5xl font-bold mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Ready to Skyrocket Your Rankings?
                </motion.h2>
                <motion.p
                  className="text-xl mb-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Let&apos;s create a customized SEO strategy that drives
                  organic traffic and boosts your online visibility.
                </motion.p>
                <motion.button
                  className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-purple-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Your Free SEO Audit
                </motion.button>
              </div>
              <motion.div
                className="w-full h-64 md:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <RocketGraphic />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-200">
            © 2025 12Twelve. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
