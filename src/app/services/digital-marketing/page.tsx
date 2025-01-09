"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  BarChart,
  Globe,
  Search,
  Share2,
  Smartphone,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engage your audience across all major platforms",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Make data-driven decisions with in-depth insights",
  },
  {
    icon: Smartphone,
    title: "Mobile Marketing",
    description: "Reach customers on-the-go with mobile-first strategies",
  },
  {
    icon: Globe,
    title: "Content Marketing",
    description: "Create valuable content that resonates with your audience",
  },
  {
    icon: Zap,
    title: "PPC Advertising",
    description: "Maximize ROI with targeted pay-per-click campaigns",
  },
];

export default function DigitalMarketingPage() {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-purple-900 text-white overflow-hidden">
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: backgroundY,
          }}
        />
        <div className="absolute inset-0 bg-purple-900 opacity-60 z-10"></div>
        <div className="relative z-20 text-center">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Digital Marketing
          </motion.h1>
          <motion.p
            className="text-2xl sm:text-3xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate Your Brand in the Digital Realm
          </motion.p>
          <motion.button
            className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-blue-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.button>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-8 h-8 rotate-90" />
        </motion.div>
      </header>

      <main ref={containerRef} className="relative z-10">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-purple-900">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Digital Marketing Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <service.icon className="w-12 h-12 text-purple-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-purple-800">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-900 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Us?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Data-Driven Strategies",
                  description:
                    "We use advanced analytics to craft strategies that deliver measurable results.",
                },
                {
                  title: "Innovative Approaches",
                  description:
                    "We stay ahead of digital trends to give you a competitive edge.",
                },
                {
                  title: "Tailored Solutions",
                  description:
                    "Every strategy is customized to meet your unique business goals.",
                },
                {
                  title: "Transparent Reporting",
                  description:
                    "We provide clear, comprehensive reports on your campaign's performance.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-800 p-8 rounded-xl"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-900 text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              y: textY,
            }}
          />
          <div className="absolute inset-0 bg-purple-900 opacity-80 z-10"></div>
          <div className="max-w-7xl mx-auto relative z-20">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Elevate Your Digital Presence?
            </motion.h2>
            <motion.p
              className="text-xl mb-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let&apos;s create a customized digital marketing strategy that
              drives results for your business.
            </motion.p>
            <div className="text-center">
              <motion.button
                className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-purple-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Consultation
              </motion.button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p>© 2025 12Twelve. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
