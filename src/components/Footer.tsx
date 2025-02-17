"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Instagram,
  Phone,
  MapPin,
  ChevronDown,
  PhoneCall,
} from "lucide-react";

const ParticleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
    }[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fill();
      });
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
};

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const socialLinks = [
    {
      name: "Linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/120twelve/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/12oTwelve",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/12otwelve/",
    },
  ];

  const footerSections = [
    {
      title: "Quick Links",
      content: (
        <nav className="space-y-2">
          <Link
            href="/privacy-policy"
            className="block hover:text-purple-300 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="block hover:text-purple-300 transition-colors"
          >
            Terms of Service
          </Link>
        </nav>
      ),
    },
    {
      title: "Connect With Us",
      content: (
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-100 hover:text-purple-300 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon className="w-6 h-6" />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </div>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <>
          <motion.p
            className="flex items-center space-x-2 text-sm text-purple-300"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-4 h-4" />
            <span>4501 23rd Avenue S Fargo, ND 58104</span>
          </motion.p>
          <motion.a
            href="tel:+12175688699"
            className="flex items-center space-x-2 text-sm text-purple-300 mt-2"
            whileHover={{ scale: 1.05 }}
          >
            <PhoneCall className="w-4 h-4" />
            <span>+1 (217) 568-8699</span>
          </motion.a>
          <div className="mt-4">
            <span className="text-sm">CIN:- U72900DL2021PTC388171</span>
            <br />
          </div>
          <div className="mt-2">
            <span className="text-sm">Company Name:- 12Twelve</span>
          </div>
        </>
      ),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 to-indigo-900 text-purple-100 py-12 overflow-hidden">
      <ParticleAnimation />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src="/logo.png"
                alt="Twelve"
                height={120}
                width={120}
                className="rounded-full bg-purple-800 p-2"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-2xl font-bold"
            >
              12twelve
            </motion.h2>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.title ? null : section.title
                  )
                }
                className="text-xl font-semibold mb-4 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>{section.title}</span>
                <motion.div
                  animate={{
                    rotate: expandedSection === section.title ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {(expandedSection === section.title ||
                  window.innerWidth >= 768) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden w-full"
                  >
                    {section.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-purple-700 text-center"
        >
          <p className="text-sm text-purple-300">
            © {new Date().getFullYear()} 12twelve. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
