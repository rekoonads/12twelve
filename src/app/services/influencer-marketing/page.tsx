"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Instagram,
  Youtube,
  Twitter,
  TrendingUp,
  Users,
  BarChart2,
  Globe,
  Star,
  Award,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const influencerServices = [
  {
    icon: Instagram,
    title: "Instagram Campaigns",
    description:
      "Leverage the power of visual storytelling on the world's most popular photo-sharing platform.",
  },
  {
    icon: Youtube,
    title: "YouTube Collaborations",
    description:
      "Partner with content creators to reach millions through engaging video content.",
  },
  {
    icon: Twitter,
    title: "Twitter Amplification",
    description:
      "Boost your message with real-time engagement and trending topics.",
  },
  {
    icon: TrendingUp,
    title: "TikTok Trends",
    description:
      "Tap into viral challenges and trends on the fastest-growing social media platform.",
  },
  {
    icon: Users,
    title: "Micro-Influencer Networks",
    description:
      "Harness the power of niche audiences with highly engaged followers.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Expand your brand's presence across borders with multi-lingual influencers.",
  },
];

const InfluencerGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient
        id="influencerGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#D8B4FE" />
      </linearGradient>
    </defs>
    <motion.circle
      cx="100"
      cy="100"
      r="80"
      fill="url(#influencerGradient)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
    <motion.path
      d="M60,100 A40,40 0 0,1 140,100"
      stroke="#FFFFFF"
      strokeWidth="4"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
    />
    {[0, 1, 2, 3, 4].map((_, index) => (
      <motion.circle
        key={index}
        cx={100 + Math.cos((index / 4) * Math.PI * 2) * 60}
        cy={100 + Math.sin((index / 4) * Math.PI * 2) * 60}
        r="10"
        fill="#FFFFFF"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
      />
    ))}
  </svg>
);

const FloatingIcons = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[Instagram, Youtube, Twitter, TrendingUp, Users, Globe].map(
      (Icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{
            duration: 2,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Icon className="w-12 h-12 text-purple-300" />
        </motion.div>
      )
    )}
  </div>
);

export default function InfluencerMarketingPage() {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <Navbar />
      <header className="fixed top-0 left-0 right-0 z-50 bg-purple-900 bg-opacity-80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.button
              className="flex items-center text-white hover:text-purple-200 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </motion.button>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#services"
                  className="hover:text-purple-200 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="hover:text-purple-200 transition-colors duration-300"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-purple-200 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-purple-900 opacity-70 z-10"></div>
          <FloatingIcons />
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Amplify Your Brand with Influencer Marketing
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect with your audience through authentic partnerships and
              drive meaningful engagement across all social platforms.
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
                Start Your Campaign
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
        </section>

        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Influencer Marketing Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {influencerServices.map((service, index) => (
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
          id="why-choose-us"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Our Influencer Marketing?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart2,
                  title: "Data-Driven Campaigns",
                  description:
                    "We use advanced analytics to ensure your campaigns reach the right audience.",
                },
                {
                  icon: Star,
                  title: "Premium Influencer Network",
                  description:
                    "Access to a curated network of high-quality influencers across various niches.",
                },
                {
                  icon: Award,
                  title: "Award-Winning Strategies",
                  description:
                    "Our campaigns have won multiple industry awards for creativity and effectiveness.",
                },
              ].map((item, index) => (
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
                    <item.icon className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-purple-200">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
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
                  Ready to Amplify Your Brand?
                </motion.h2>
                <motion.p
                  className="text-xl mb-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Let&apos;s create a customized influencer marketing strategy
                  that elevates your brand and connects you with your target
                  audience.
                </motion.p>
                <motion.button
                  className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-purple-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Your Free Consultation
                </motion.button>
              </div>
              <motion.div
                className="w-full h-64 md:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <InfluencerGraphic />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-200">
            © 2023 Your Influencer Marketing Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
