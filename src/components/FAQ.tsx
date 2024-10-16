"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes our service premium?",
    answer:
      "Our service is crafted with attention to detail, using only the finest materials and cutting-edge technology. We offer personalized solutions tailored to each client's unique needs, ensuring an unparalleled experience.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "Scheduling a consultation is easy and convenient. Simply visit our website and use our online booking system, or call our dedicated concierge team who will assist you in finding the perfect time slot.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that plans can change. Our flexible cancellation policy allows you to reschedule or cancel your appointment up to 24 hours in advance without any fees. For last-minute changes, please contact our support team.",
  },
  {
    question: "Do you offer international services?",
    answer:
      "Yes, we pride ourselves on our global reach. Our premium services are available worldwide, with dedicated teams in major cities to ensure consistent quality and personalized care, no matter where you are.",
  },
  {
    question: "What sets your customer support apart?",
    answer:
      "Our customer support is unrivaled. We offer 24/7 concierge-style assistance, with a dedicated account manager for each client. Our team is trained to anticipate your needs and provide proactive, solution-oriented support.",
  },
  {
    question: "How do you ensure privacy and discretion?",
    answer:
      "Privacy is paramount in our premium service. We employ state-of-the-art security measures and strict confidentiality protocols. All our staff sign extensive NDAs, and we offer private service options for clients requiring the utmost discretion.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-purple-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 600%22%3E%3Cfilter id=%22a%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23a)%22/%3E%3C/svg%3E')] opacity-50 animate-subtle-drift"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/30 via-purple-700/30 to-indigo-800/30 animate-hue-rotate blur-3xl"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-purple-100 sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
          </div>
          <p className="mt-8 text-xl text-purple-200 max-w-3xl mx-auto">
            Discover the answers to commonly asked questions about our premium
            services and exclusive offerings.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="bg-purple-800 bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-purple-700"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 8px 30px rgba(139, 92, 246, 0.2)",
        }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-opacity-75"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-medium text-purple-100">
            {question}
          </span>
          {isOpen ? (
            <Minus className="w-5 h-5 text-purple-300" />
          ) : (
            <Plus className="w-5 h-5 text-purple-300" />
          )}
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-5">
            <p className="text-purple-200">{answer}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
