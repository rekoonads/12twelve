"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Check,
  Gift,
  Zap,
  Users,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

interface FloatingIconProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FloatingIcon = ({
  children,
  className = "",
  delay = 0,
}: FloatingIconProps) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
    }}
  >
    {children}
  </motion.div>
);

interface PlanFeature {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular: boolean;
}

const plans: PlanFeature[] = [
  {
    name: "Starter",
    price: 299,
    description: "Perfect for small businesses just getting started",
    features: [
      "Up to 5 users",
      "5GB storage",
      "Basic support",
      "Limited integrations",
      "Analytics dashboard",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: 699,
    description: "Ideal for growing businesses and teams",
    features: [
      "Up to 20 users",
      "20GB storage",
      "Priority support",
      "Advanced integrations",
      "Analytics dashboard",
      "Advanced security",
      "Custom branding",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 999,
    description: "For large organizations with specific needs",
    features: [
      "Unlimited users",
      "Unlimited storage",
      "Dedicated support",
      "Advanced integrations",
      "Analytics dashboard",
      "Advanced security",
      "Custom branding",
      "API access",
      "24/7 phone support",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  const [showPromo, setShowPromo] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <FloatingIcon className="left-1/4 top-32">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
        </FloatingIcon>
        <FloatingIcon className="right-1/4 top-40" delay={1}>
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
        </FloatingIcon>
        <FloatingIcon className="left-1/3 bottom-20" delay={2}>
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-purple-600" />
          </div>
        </FloatingIcon>

        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Simple & Affordable Pricing
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The way of making your business work online has undergone major
            changes and this is where we can help you with comprehensive virtual
            assistance solutions.
          </motion.p>
          <motion.button
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Learn More
          </motion.button>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">
              Our Plans
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Find the Perfect Plan for You
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We understand that every business has unique needs. That&apos;s
              why we offer a variety of simple and affordable pricing plans to
              fit your specific budget and goals. Our plans are clear and
              transparent, with no hidden fees or surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? "ring-2 ring-purple-600" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {plan.popular && (
                  <div className="bg-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <button
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-colors duration-300 ${
                      plan.popular
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
                <div className="bg-gray-50 p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-600"
                      >
                        <Check className="w-5 h-5 text-purple-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              Limited Time Deal
            </div>
          </div>
        </div>
      </section>

      {/* Promo Popup */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            className="fixed bottom-4 right-4 bg-purple-600 text-white p-6 rounded-2xl shadow-lg max-w-sm"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setShowPromo(false)}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4">
              <Gift className="w-12 h-12" />
              <div>
                <h4 className="text-2xl font-bold mb-1">Flat 50% OFF!</h4>
                <p className="text-purple-100 mb-2">ON ALL OUR PLANS</p>
                <div className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  Use Code XMAS
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
