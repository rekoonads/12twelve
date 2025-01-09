"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Maximize your brand's visibility on social platforms with tailored strategies that engage audiences and drive real-time interaction.",
    logo: "/socialmedia.png",
    path: "/services/social-media-marketing",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Achieve measurable success with performance-driven marketing campaigns, designed to deliver ROI through precise targeting and data analysis.",
    logo: "/seo.png",
    path: "/services/search-engine-optimization",
  },
  {
    title: "Influencer Marketing",
    description:
      "Leverage the power of influencers to amplify your brand's message and connect authentically with your target audience for maximum reach.",
    logo: "/influencer.png",
    path: "/services/influencer-marketing",
  },
  {
    title: "Website Design and Development",
    description:
      "Create a seamless user experience with beautifully designed and highly functional websites that capture your brand's essence.",
    logo: "/website.png",
    path: "/services/website-design-development",
  },
  {
    title: "YouTube Monetisation",
    description:
      "Boost your online presence with strategic social media ads that target the right audience, driving clicks and conversions like never before.",
    logo: "/youtube.png",
    path: "/services/youtube-monetisation",
  },

  {
    title: "Digital Marketing",
    description:
      "Elevate your online presence with comprehensive digital marketing strategies that drive growth, engagement, and conversions across all digital channels.",
    logo: "/digital-marketing.png",
    path: "/services/digital-marketing",
  },
  {
    title: "White Labeling",
    description:
      "Expand your service offerings with our white label solutions, allowing you to rebrand our high-quality services as your own and grow your business effortlessly.",
    logo: "/white-labeling.png",
    path: "/services/white-labeling",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="mb-6 relative z-10"
                animate={{
                  rotateY: hoveredIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-full w-16 h-16 mx-auto">
                  <Image
                    src={service.logo}
                    alt={`${service.title} Logo`}
                    width={40}
                    height={40}
                    className="mx-auto"
                  />
                </div>
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold text-center mb-4 text-white"
                animate={{ y: hoveredIndex === index ? -5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-purple-200 text-center mb-6"
                animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              >
                {service.description}
              </motion.p>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
              >
                <Link href={service.path}>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full flex items-center transition-all duration-300 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
