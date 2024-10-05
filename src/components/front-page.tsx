"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronRight,
  Star,
  Menu,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import About from "./About";
import WhyChooseUs from "./WhyChooseUs";
import Blog from "./Blog";
import { useRouter } from "next/navigation";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useUserData } from "@/hooks/useUserData";
import LoadingScreen from "./loading-screen";
import AnimatedHeroSection from "./Hero";
import Services from "./Services";
import AnimatedPurplePortfolio from "./Portfolio";

export default function FrontPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const { userId } = useAuth();
  const { userData, loading, error } = useUserData();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (
      !loading &&
      userData &&
      userData.userType === "influencer" &&
      userData.userId
    ) {
      router.push(`/influencers/${userData.userId}`);
    }
  }, [loading, userData, router]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error.message}
      </div>
    );
  }

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CEO, TechCorp",
      content:
        "The results we've seen since partnering with this agency have been nothing short of extraordinary.",
    },
    {
      name: "Sarah Lee",
      role: "Marketing Director, FashionBrand",
      content:
        "Their innovative strategies have transformed our online presence and boosted our sales significantly.",
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupX",
      content:
        "Working with this team has been a game-changer for our startup. They truly understand digital marketing.",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-purple-600 shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-primary">
            <Image src={"/logo.png"} alt="Twelve" width={120} height={120} />
          </a>
          <nav className="hidden md:flex space-x-8 text-white">
            <a
              href="/offers"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Offers
            </a>
            <a
              href="/affiliate"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Affiliate
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#blog"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
            {userId ? (
              <div className="text-sm font-medium hover:text-primary transition-colors">
                <UserButton />
              </div>
            ) : (
              <a
                href="/sign-in"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Sign In
              </a>
            )}
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <AnimatedHeroSection />

        <section>
          <About />
        </section>

        <Services />

        <WhyChooseUs />

        <section id="portfolio">
          <AnimatedPurplePortfolio />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section
          id="contact"
          className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  rows={6}
                />
                <Button
                  size="lg"
                  className="w-full bg-white text-purple-600 hover:bg-purple-50"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <Image src={"/logo.png"} alt="Twelve" height={120} width={120} />
            </div>
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="/privacy-policy"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </nav>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://www.facebook.com/12otwelve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="https://www.twitter.com/12otwelve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/12otwelve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="https://www.youtube.com/12otwelve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <Youtube />
              </a>
            </div>
            <div className="flex flex-col text-center md:text-left mb-4 md:mb-0">
              <a
                href="tel:+917836001200"
                className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
              >
                821-9084940
              </a>
              <p className="text-sm text-gray-400">Delhi India 110055</p>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 12twelve. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
