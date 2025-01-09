"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  PlayCircle,
  DollarSign,
  TrendingUp,
  Users,
  Award,
  BarChart2,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const services = [
  {
    icon: PlayCircle,
    title: "Content Strategy",
    description:
      "Develop a winning content strategy that attracts viewers and increases watch time.",
  },
  {
    icon: DollarSign,
    title: "Ad Revenue Optimization",
    description:
      "Maximize your earnings through strategic ad placement and optimization techniques.",
  },
  {
    icon: TrendingUp,
    title: "Channel Growth",
    description:
      "Implement proven tactics to grow your subscriber base and increase your reach.",
  },
  {
    icon: Users,
    title: "Audience Engagement",
    description:
      "Build a loyal community around your channel with effective engagement strategies.",
  },
  {
    icon: Award,
    title: "Brand Partnerships",
    description:
      "Connect with brands for sponsorships and collaborations that align with your content.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description:
      "Gain insights from detailed analytics to continuously improve your performance.",
  },
];

const benefits = [
  "Increased Revenue Streams",
  "Expanded Audience Reach",
  "Enhanced Content Quality",
  "Improved SEO Rankings",
  "Greater Brand Visibility",
  "Valuable Industry Connections",
];

export default function YouTubeMonetizationPage() {
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
            backgroundImage: "url('/youtube-bg.jpg')",
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
            Unlock Your YouTube Potential
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your passion into profit with our expert YouTube
            monetization strategies.
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

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our YouTube Monetization Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-purple-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-lg"
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Benefits of Our Monetization Strategies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Zap className="w-6 h-6 text-purple-300 flex-shrink-0" />
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-4">TechTalks Channel</h3>
              <p className="text-xl mb-6">
                See how we helped TechTalks increase their revenue by 500% and
                grow their subscriber base to over 1 million in just 12 months.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-purple-300" />
                  <span>500% increase in revenue</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-purple-300" />
                  <span>1M+ subscribers gained</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-purple-300" />
                  <span>10x increase in watch time</span>
                </li>
              </ul>
              <motion.button
                className="mt-8 bg-white text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-purple-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Case Study
              </motion.button>
            </motion.div>
            <motion.div
              className="relative h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/techtalks-growth.jpg"
                alt="TechTalks Channel Growth Chart"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.blockquote
            className="text-2xl italic mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            &quot;Working with 12Twelve has been a game-changer for my YouTube
            channel. Their strategies helped me turn my passion into a full-time
            career. I couldn&apos;t be happier with the results!&quot;
          </motion.blockquote>
          <motion.p
            className="text-xl font-semibold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            - Sarah Johnson, Travel Vlogger
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Monetize Your YouTube Channel?
          </motion.h2>
          <motion.p
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s create a customized monetization strategy that takes your
            channel to the next level and maximizes your earning potential.
          </motion.p>
          <motion.button
            className="bg-white text-purple-900 font-bold py-4 px-10 rounded-full text-lg transition-colors duration-300 hover:bg-purple-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Start Your YouTube Journey
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
