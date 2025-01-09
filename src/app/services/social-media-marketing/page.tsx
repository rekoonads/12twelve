"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  TrendingUp,
  Users,
  BarChart2,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const socialPlatforms = [
  { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
  { name: "Twitter", icon: Twitter, color: "bg-sky-500" },
  { name: "Instagram", icon: Instagram, color: "bg-pink-600" },
  { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700" },
  { name: "YouTube", icon: Youtube, color: "bg-red-600" },
];

const services = [
  {
    icon: TrendingUp,
    title: "Strategy Development",
    description:
      "Tailored social media strategies to achieve your business goals.",
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Engage and grow your audience across all social platforms.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description:
      "In-depth insights and performance tracking for continuous improvement.",
  },
  {
    icon: MessageCircle,
    title: "Content Creation",
    description:
      "Compelling, brand-aligned content that resonates with your audience.",
  },
];

export default function SocialMediaMarketingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <Navbar />

      {/* Hero Section */}
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
            Amplify Your Brand with Social Media Marketing
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engage, grow, and convert your audience across all major social
            platforms with our expert strategies and content creation.
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
              Get Started
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

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Dominate Every Platform
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className={`${platform.color} p-6 rounded-full shadow-lg`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <platform.icon size={48} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Social Media Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-purple-700 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <service.icon className="w-12 h-12 text-purple-300 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-purple-200">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Elevate Your Social Media Presence?
          </motion.h2>
          <motion.p
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s create a tailored social media strategy that drives
            engagement, builds brand loyalty, and boosts your bottom line.
          </motion.p>
          <motion.button
            className="bg-white text-purple-900 font-bold py-4 px-10 rounded-full text-lg transition-colors duration-300 hover:bg-purple-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get Your Free Consultation
          </motion.button>
        </div>
      </section>

      {/* Footer */}
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
