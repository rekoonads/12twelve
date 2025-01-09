"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Globe,
  Mail,
  Phone,
  FileText,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const pressReleases = [
  {
    title: "12Twelve Launches Revolutionary AI-Powered Marketing Platform",
    date: "June 15, 2024",
    excerpt:
      "12Twelve unveils its groundbreaking AI-powered marketing platform, set to transform the digital marketing landscape.",

    link: "#",
  },
  {
    title: "12Twelve Expands Operations to Asia-Pacific Region",
    date: "May 3, 2024",
    excerpt:
      "In a strategic move to capture emerging markets, 12Twelve announces its expansion into the Asia-Pacific region.",

    link: "#",
  },
  {
    title: "12Twelve Partners with Global Tech Giant for Innovative Solutions",
    date: "April 18, 2024",
    excerpt:
      "12Twelve joins forces with a leading tech company to develop cutting-edge marketing solutions for enterprises.",

    link: "#",
  },
  {
    title: "12Twelve Achieves Carbon Neutrality in All Operations",
    date: "March 22, 2024",
    excerpt:
      "As part of its commitment to sustainability, 12Twelve announces the achievement of carbon neutrality across all its operations.",

    link: "#",
  },
];

export default function PressReleasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
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
            12Twelve Press Room
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay updated with the latest news and announcements from 12Twelve
          </motion.p>
        </div>
      </header>

      {/* Latest Press Releases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest Press Releases
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                className="bg-purple-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="p-6">
                  <div className="flex items-center text-purple-300 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{release.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                  <p className="text-purple-200 mb-4">{release.excerpt}</p>
                  <a
                    href={release.link}
                    className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-300"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Media Kit
          </motion.h2>
          <motion.p
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access our media kit for logos, brand guidelines, and
            high-resolution images.
          </motion.p>
          <motion.button
            className="bg-white text-purple-900 font-bold py-4 px-10 rounded-full text-lg transition-colors duration-300 hover:bg-purple-100 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Download Media Kit <FileText className="w-5 h-5 ml-2" />
          </motion.button>
        </div>
      </section>

      {/* Press Contacts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Press Contacts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-purple-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Media Inquiries</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-purple-300" />
                  <a
                    href="mailto:press@12twelve.com"
                    className="hover:underline"
                  >
                    press@12twelve.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-purple-300" />
                  <a href="tel:+1234567890" className="hover:underline">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-purple-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Company Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Globe className="w-5 h-5 mr-3 text-purple-300" />
                  <a
                    href="https://www.12twelve.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.12twelve.com
                  </a>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="w-5 h-5 mr-3 text-purple-300 mt-1" />
                  <div>
                    <a href="#" className="hover:underline block">
                      LinkedIn
                    </a>
                    <a href="#" className="hover:underline block mt-2">
                      Twitter
                    </a>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscribe to Press Releases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stay Informed
          </motion.h2>
          <motion.p
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Subscribe to our press release mailing list to receive the latest
            updates directly in your inbox.
          </motion.p>
          <motion.form
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-purple-900 w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-purple-100 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </motion.form>
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
