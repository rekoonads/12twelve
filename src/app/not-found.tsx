"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PlaneTakeoff, Rocket, Stars } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-1/2 mb-8 md:mb-0 relative"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <PlaneTakeoff className="w-48 h-48 text-blue-300" />
              </div>
              <Rocket className="w-24 h-24 text-pink-400 absolute top-0 left-0 transform -rotate-45" />
              <Stars className="w-16 h-16 text-yellow-300 absolute bottom-0 right-0" />
              <Stars className="w-8 h-8 text-yellow-300 absolute top-1/4 right-1/4" />
              <Stars className="w-12 h-12 text-yellow-300 absolute bottom-1/4 left-1/4" />
            </motion.div>
            <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
              >
                404
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl font-semibold mb-4 text-white"
              >
                Lost in Space
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8"
              >
                Houston, we have a problem. The page you&apos;re looking for has
                drifted into the cosmic void.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link
                  href="/"
                  className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-3 rounded-full hover:from-teal-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
                >
                  Return to Home
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-8 text-center"
      >
        <p className="text-white text-sm">
          © 2024 MyTwelve12. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
