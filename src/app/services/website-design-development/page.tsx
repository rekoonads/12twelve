"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Layers,
  Code,
  Palette,
  Zap,
  Smartphone,
  Globe,
  Figma,
  Database,
  Server,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const services = [
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user experiences that delight your audience.",
  },
  {
    icon: Code,
    title: "Front-end Development",
    description:
      "Build responsive and interactive websites using the latest web technologies.",
  },
  {
    icon: Server,
    title: "Back-end Development",
    description:
      "Develop robust server-side applications and APIs to power your web solutions.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Design and implement efficient database structures for optimal data management.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description:
      "Ensure your website looks and functions perfectly on all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimize your website for speed and efficiency to provide the best user experience.",
  },
];

const technologies = [
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/next.svg" },
  { name: "TypeScript", icon: "/ts-logo.png?height=80&width=80" },
  { name: "Node.js", icon: "/nodejsLight.svg" },
  { name: "GraphQL", icon: "/graphql.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "We start by understanding your business goals and target audience.",
  },
  {
    title: "Planning",
    description:
      "We create a detailed project plan and define the site architecture.",
  },
  {
    title: "Design",
    description:
      "Our designers create stunning visuals and intuitive user interfaces.",
  },
  {
    title: "Development",
    description:
      "Our developers bring the designs to life with clean, efficient code.",
  },
  {
    title: "Testing",
    description:
      "We rigorously test the website to ensure it's bug-free and performs well.",
  },
  {
    title: "Launch",
    description:
      "We deploy your website and provide support to ensure a smooth launch.",
  },
];

export default function WebsiteDesignDevelopmentPage() {
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
            Crafting Digital Experiences That Inspire
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From concept to code, we bring your vision to life with cutting-edge
            web design and development solutions.
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
              Start Your Project
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-white hover:text-purple-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Portfolio
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
            Our Web Design & Development Services
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

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Technologies We Use
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <p className="text-center font-semibold">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={containerRef}
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
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Design & Development Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-purple-700 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-purple-300 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-purple-200">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Latest Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sweven",
                image: "/getsweven.png",
                link: "https://www.getsweven.com",
              },
              {
                name: "Kredz",
                image: "/kredz.png",
                link: "https://www.kredz.in",
              },
              {
                name: "Slide",
                image: "/slide.png",
                link: "https://slide-rho.vercel.app",
              },
              {
                name: "Fizzi",
                image: "/fizzi.png",
                link: "https://fizzi-swart.vercel.app",
              },
              {
                name: "Fuzzie",
                image: "/fuzzie.png",
                link: "https://fuzzie-ayan471.vercel.app",
              },
              {
                name: "plura",
                image: "/plura.png",
                link: "https://plura-ayan471.vercel.app",
              },
            ].map((project) => (
              <motion.div
                key={project.name}
                className="relative overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1000}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-purple-900 bg-opacity-75 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.name}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-purple-900 font-bold py-2 px-4 rounded-full hover:bg-purple-100 transition-colors duration-300"
                  >
                    Visit Website
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                company: "Tech Innovators",
                quote:
                  "12Twelve delivered an outstanding website that perfectly captures our brand essence. Their attention to detail and technical expertise are unmatched.",
              },
              {
                name: "Jane Smith",
                company: "Creative Solutions",
                quote:
                  "Working with 12Twelve was a game-changer for our online presence. They created a beautiful, functional site that has significantly boosted our conversions.",
              },
              {
                name: "Mike Johnson",
                company: "Global Enterprises",
                quote:
                  "The team at 12Twelve went above and beyond our expectations. Their innovative approach to web design has set us apart from our competitors.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-purple-700 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col h-full">
                  <p className="text-purple-200 mb-6 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-purple-300">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Ready to Bring Your Vision to Life?
          </motion.h2>
          <motion.p
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s create a stunning website that captivates your audience
            and drives results for your business.
          </motion.p>
          <motion.button
            className="bg-white text-purple-900 font-bold py-4 px-10 rounded-full text-lg transition-colors duration-300 hover:bg-purple-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Start Your Project
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
