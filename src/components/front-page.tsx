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

export default function FrontPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const { userId } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

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

  const portfolioImages = [
    {
      src: "/project1.jpg",
      alt: "Social Media Marketing/management",
      title: "Social Media Marketing/management",
    },
    {
      src: "/project2.jpg",
      alt: "Search engine optimization ",
      title: "Search engine optimization ",
    },
    {
      src: "/project3.jpg",
      alt: "Influencer Marketing",
      title: "Influencer Marketing",
    },
    {
      src: "/project4.jpg",
      alt: "Website Design and Development",
      title: "Website Design and Development",
    },
    {
      src: "/project5.jpg",
      alt: "YouTube Monetisation",
      title: "YouTube Monetisation",
    },
    {
      src: "/project6.jpg",
      alt: "Press Release",
      title: "Press Release",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {!userId && (
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
              <a
                href="/sign-in"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Sign In
              </a>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </header>
      )}
      {userId && (
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
              <div className="text-sm font-medium hover:text-primary transition-colors">
                <UserButton />
              </div>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </header>
      )}
      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up">
              Grow Your Brand with Smart Digital Marketing
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up animation-delay-300">
              We help brands stand out online with creative content and smart
              strategies that get results.
            </p>
            <Button
              size="lg"
              className="animate-fade-in-up animation-delay-600 bg-white text-purple-600 hover:bg-purple-50"
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section>
          <About />
        </section>

        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Social Media Marketing/management",
                  description:
                    "Maximize your brand’s visibility on social platforms with tailored strategies that engage audiences and drive real-time interaction.",
                  logo: "/socialmedia.png", // Example logo path
                },
                {
                  title: "Search engine optimization",
                  description:
                    "Achieve measurable success with performance-driven marketing campaigns, designed to deliver ROI through precise targeting and data analysis.",
                  logo: "/seo.png", // Example logo path
                },
                {
                  title: "Influencer Marketing",
                  description:
                    "Leverage the power of influencers to amplify your brand’s message and connect authentically with your target audience for maximum reach.",
                  logo: "/influencer.png", // Example logo path
                },
                {
                  title: "Website Design and Development",
                  description:
                    "Create a seamless user experience with beautifully designed and highly functional websites that capture your brand’s essence.",
                  logo: "/website.png", // Example logo path
                },
                {
                  title: "YouTube Monetisation",
                  description:
                    "Boost your online presence with strategic social media ads that target the right audience, driving clicks and conversions like never before.",
                  logo: "/youtube.png", // Example logo path
                },
                {
                  title: "Press Release",
                  description:
                    "Dominate search engines and increase visibility with expertly managed Google Ads campaigns designed to bring in qualified traffic and leads.",
                  logo: "/press.png", // Example logo path
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={service.logo}
                      alt={`${service.title} Logo`}
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center mx-auto px-4">
          <WhyChooseUs />
        </section>

        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Portfolio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center px-4">
                      {image.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 relative">
                <div className="text-4xl text-purple-500 absolute top-4 left-4 opacity-20">
                  &quot;
                </div>
                <p className="text-lg mb-4">
                  {testimonials[currentTestimonial].content}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentTestimonial === index
                        ? "bg-purple-500"
                        : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section> */}

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
                +917836001200
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
