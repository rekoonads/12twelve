"use client";

import { Button } from "@/components/ui/button";
import { useUserData } from "@/hooks/useUserData";
import { useAuth, UserButton } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import About from "./About";
import Blog from "./Blog";
import { BrandSlider } from "./BrandSlider";
import Footer from "./Footer";
import GetInTouch from "./GetInTouch";
import AnimatedHeroSection from "./Hero";
import LoadingScreen from "./loading-screen";
import AnimatedPurplePortfolio from "./Portfolio";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";

export default function FrontPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

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

  const navItems = [
    { href: "/offers", label: "Offers" },
    { href: "/hiring", label: "Influencers" },
    { href: "/affiliate", label: "Affiliate" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-purple-900/30 backdrop-blur-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.png"
                alt="Twelve"
                width={80}
                height={80}
                className="rounded-full bg-purple-800 p-1"
              />
            </motion.a>

            <nav className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  className="relative"
                  onHoverStart={() => setActiveItem(item.label)}
                  onHoverEnd={() => setActiveItem(null)}
                >
                  <Link href={item.href} passHref>
                    <motion.a
                      className="px-3 py-2 text-sm font-medium text-white hover:text-purple-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.a>
                  </Link>
                  <AnimatePresence>
                    {activeItem === item.label && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              {userId ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10"
                >
                  <UserButton />
                </motion.div>
              ) : (
                <Link href="/sign-in" passHref>
                  <motion.a
                    className="px-3 py-2 text-sm font-medium text-white hover:text-purple-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign In
                  </motion.a>
                </Link>
              )}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="relative z-10 md:hidden text-white hover:text-purple-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-purple-900/95 backdrop-blur-md"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.href} passHref>
                      <motion.a
                        className="flex items-center justify-between text-lg font-medium text-white hover:text-purple-300 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileHover={{ x: 10 }}
                      >
                        {item.label}
                        <ChevronRight className="h-5 w-5" />
                      </motion.a>
                    </Link>
                  </motion.div>
                ))}
                {userId ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <UserButton />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <Link href="/sign-in" passHref>
                      <motion.a
                        className="flex items-center justify-between text-lg font-medium text-white hover:text-purple-300 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileHover={{ x: 10 }}
                      >
                        Sign In
                        <ChevronRight className="h-5 w-5" />
                      </motion.a>
                    </Link>
                  </motion.div>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="flex-1">
        <AnimatedHeroSection />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BrandSlider />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <About />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          id="services"
        >
          <Services />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <WhyChooseUs />
        </motion.section>

        <motion.section
          id="portfolio"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <AnimatedPurplePortfolio />
        </motion.section>

        <motion.section
          id="blog"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Blog />
        </motion.section>

        <motion.section
          id="blog"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FAQ />
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <GetInTouch />
        </motion.section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
