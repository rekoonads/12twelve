"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { conversionRates, currencySymbols } from "@/lib/currencyConverter";

type Currency = "USD" | "NGN" | "INR" | "AED" | "GBP" | "PKR";

const plans = [
  {
    name: "YouTube Growth Package",
    price: 499,
    description: "Includes 1000 Subscribers & 1000 Hours",
    features: [
      "50 Hours of Monthly Support",
      "Priority Task Handling",
      "Regular updates on completed tasks",
      "Team Management",
      "Document Processing",
      "Transcription Services",
    ],
    discount: 10,
  },
  {
    name: "Growth Package",
    price: 999,
    description: "For clients with more substantial needs",
    features: [
      "60 hours of work per month",
      "Basic Digital Marketing",
      "Social Media Ad Campaign",
      "Website Management",
      "Basic Reporting",
      "Set budget will be provide by the client",
    ],
    discount: 15,
    popular: true,
  },
  {
    name: "Professional Package",
    price: 1499,
    description: "For business professionals who need significant support",
    features: [
      "100 hours of work per month",
      "Detailed Reporting",
      "Website Management",
      "Content Curation",
      "Video Editing",
      "Dedicated Team",
      "Set budget will be provide by the client",
    ],
    discount: 20,
  },
  {
    name: "Premium Package",
    price: 2499,
    description: "Full month of service dedicated to one focus area",
    features: [
      "Video Editing",
      "Ads Management",
      "Website Management",
      "24/7 Customer Support",
      "Priority Service Level",
      "Set budget will be provide by the client",
    ],
    discount: 25,
  },
];

export default function PricingPage() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USD");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Service Packages & Pricing
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Growth, Our Strategy
        </motion.p>

        <div className="mb-8 text-center">
          <label htmlFor="currency-select" className="mr-2">
            Select Currency:
          </label>
          <select
            id="currency-select"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value as Currency)}
            className="bg-purple-800 text-white rounded p-2"
          >
            {Object.entries(currencySymbols).map(([code, symbol]) => (
              <option key={code} value={code}>
                {symbol} {code}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-purple-800 rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? "ring-2 ring-pink-500" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-pink-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {currencySymbols[selectedCurrency]}
                    {(plan.price * conversionRates[selectedCurrency]).toFixed(
                      2
                    )}
                  </span>
                </div>
                <p className="text-sm text-purple-300 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-pink-300 mb-4">
                  Note: ads Budget will be provided by the client.
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-lg mb-4">
            Note: 18% GST is applicable on all plans
          </p>
        </motion.div>

        <motion.div
          className="mt-16 bg-purple-800 p-8 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Why Choose 12Twelve?</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span>
                Our unique approach combines industry expertise, a
                customer-focused mindset, and cutting-edge technology to provide
                solutions that are both innovative and impactful.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span>
                How we understand client needs & Developing tailored strategies
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span>
                Delivering results through high-quality content and campaigns
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span>Continuous analysis and optimization</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span>
                Transparent communication & Regular progress updates and
                feedback loops
              </span>
            </li>
          </ul>
        </motion.div>
      </main>

      <footer className="bg-purple-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-purple-300 mb-4">
            Ready to see the impact for yourself? Contact us today!
          </p>
          <p className="text-purple-300">
            Email:{" "}
            <a href="mailto:hello@12twelve.com" className="underline">
              hello@12twelve.com
            </a>{" "}
            | Website:{" "}
            <a
              href="https://www.my12twelve.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.my12twelve.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
