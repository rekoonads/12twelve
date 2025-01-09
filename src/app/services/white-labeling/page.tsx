"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Layers,
  Zap,
  Users,
  BarChart,
  Shield,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const benefits = [
  {
    icon: Layers,
    title: "Customizable Solutions",
    description: "Tailor our products to match your brand identity seamlessly.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Launch your branded solutions quickly and efficiently.",
  },
  {
    icon: Users,
    title: "Expanded Customer Base",
    description: "Reach new markets and grow your customer portfolio.",
  },
  {
    icon: BarChart,
    title: "Increased Revenue",
    description:
      "Boost your profits with our high-margin white-label products.",
  },
  {
    icon: Shield,
    title: "Reduced Risk",
    description: "Leverage our tested and proven solutions to minimize risk.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Expand your business internationally with localized solutions.",
  },
];

const products = [
  { name: "CRM Software", image: "/crm.png" },
  { name: "Marketing Automation", image: "/automation.png" },
  { name: "Analytics Platform", image: "/analytics.png" },
  { name: "E-commerce Solution", image: "/ecommerce.png" },
];

export default function WhiteLabelingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-purple-900 bg-opacity-70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            White-Label Excellence
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-12 text-purple-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate your brand with our cutting-edge white-label solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg transform hover:-translate-y-1">
              Get Started
            </button>
          </motion.div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Unlock the Power of White-Labeling
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-purple-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-lg border border-purple-700"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              >
                <benefit.icon className="w-12 h-12 text-pink-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-purple-300">
                  {benefit.title}
                </h3>
                <p className="text-purple-200">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our White-Label Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-70"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {product.name}
                  </h3>
                  <p className="text-purple-200 mb-4">
                    Customizable solution for your business needs.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-purple-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-12 rounded-xl shadow-lg border border-purple-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.blockquote
              className="text-2xl italic mb-8 text-purple-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              &quot;12Twelve&apos;s white-label solutions have revolutionized
              our business. We&apos;ve seen a 200% increase in customer
              satisfaction and a 150% boost in revenue since partnering with
              them.&quot;
            </motion.blockquote>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div>
                <p className="text-xl font-semibold text-purple-300">
                  Sarah Johnson
                </p>
                <p className="text-purple-400">CEO, TechInnovate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl mb-12 text-purple-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s create a customized white-label solution that propels
            your brand to new heights.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Start Your White-Label Journey
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300">
            © 2025 12Twelve. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
