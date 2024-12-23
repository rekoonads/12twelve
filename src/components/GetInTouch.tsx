"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitMessage } from "@/app/actions/submitMessage";

const LuxuryBackground = () => {
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
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#1E0A3C"); // Deep purple
      gradient.addColorStop(0.5, "#3C1A7E"); // Rich purple
      gradient.addColorStop(1, "#5B2C9D"); // Vibrant purple
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 215, 0, 0.2)"; // Gold color with low opacity
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
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

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

export default function GetInTouch() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitMessage(formData);

    if (result.success) {
      setIsSubmitted(true);
      formRef.current?.reset();
    } else {
      setError(result.error || "An unexpected error occurred");
    }

    setIsSubmitting(false);
  };

  const inputVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <LuxuryBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            ref={formRef}
            className="space-y-6 backdrop-blur-xl bg-white/5 p-8 rounded-2xl shadow-2xl border border-purple-500/20"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={inputVariants}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-purple-900/20 border-purple-500/30 text-purple-100 placeholder:text-purple-300/60 focus:border-purple-400 focus:ring-2 focus:ring-purple-500"
                  required
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-purple-900/20 border-purple-500/30 text-purple-100 placeholder:text-purple-300/60 focus:border-purple-400 focus:ring-2 focus:ring-purple-500"
                  required
                />
              </motion.div>
            </div>
            <motion.div variants={inputVariants}>
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Your Phone Number"
                className="bg-purple-900/20 border-purple-500/30 text-purple-100 placeholder:text-purple-300/60 focus:border-purple-400 focus:ring-2 focus:ring-purple-500"
                required
              />
            </motion.div>
            <motion.div variants={inputVariants}>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-purple-900/20 border-purple-500/30 text-purple-100 placeholder:text-purple-300/60 focus:border-purple-400 focus:ring-2 focus:ring-purple-500"
                required
              />
            </motion.div>
            <motion.div variants={inputVariants}>
              <Textarea
                name="message"
                placeholder="Your Message"
                className="bg-purple-900/20 border-purple-500/30 text-purple-100 placeholder:text-purple-300/60 focus:border-purple-400 focus:ring-2 focus:ring-purple-500"
                rows={6}
                required
              />
            </motion.div>
            <motion.div variants={inputVariants}>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 transition-all duration-300 group shadow-lg"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center"
                  >
                    Sending...
                  </motion.span>
                ) : isSubmitted ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center"
                  >
                    <CheckCircle className="mr-2" /> Message Sent
                  </motion.span>
                ) : (
                  <motion.span
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    Send Message{" "}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                )}
              </Button>
            </motion.div>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 flex items-center"
              >
                <AlertCircle className="mr-2" /> {error}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
