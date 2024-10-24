"use client";

import { useState, useEffect } from "react";
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  Share2Icon,
  ChevronUpIcon,
  ChevronLeftIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-800 min-h-screen py-12 px-4">
      <article className="container mx-auto max-w-4xl">
        <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden">
          <div className="relative h-[50vh] min-h-[400px]">
            <Link
              href="/"
              className="absolute top-4 left-4 z-10 bg-purple-500/50 text-purple-100 p-2 rounded-full hover:bg-purple-400/60 transition-all duration-300 backdrop-blur-sm"
              aria-label="Back to home"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </Link>
            <Image
              src="/marketing.jpg"
              alt="12Twelve Marketing Agency"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-100 leading-tight">
                12Twelve Marketing Agency: Elevating Brands with Strategic
                Innovation
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-purple-200">
                <span className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  September 16, 2024
                </span>
                <span className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />5 min read
                </span>
                <span className="flex items-center">
                  <TagIcon className="w-4 h-4 mr-2" />
                  Marketing, Innovation
                </span>
              </div>
            </div>
          </div>
          <div className="px-8 py-12 text-purple-100">
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-xl leading-relaxed">
                In today&apos;s fast-paced digital world, standing out from the
                competition requires more than just good products or services—it
                demands strategic innovation, creative campaigns, and a deep
                understanding of market trends.{" "}
                <strong className="text-purple-200">
                  12Twelve Marketing Agency
                </strong>
                , a full-service marketing firm, is making waves by offering
                cutting-edge solutions tailored to help brands achieve their
                goals with precision and efficiency. With a unique blend of
                creativity and data-driven strategies, 12Twelve is
                revolutionizing the way businesses approach marketing in the
                digital age.
              </p>
              <h2 className="text-3xl font-bold mt-10 mb-6 text-purple-200">
                The Power of Strategic Innovation
              </h2>
              <p>
                At the core of 12Twelve&apos;s success is their commitment to
                strategic innovation. By constantly staying ahead of industry
                trends and leveraging the latest technologies, they provide
                their clients with a competitive edge in an ever-evolving
                marketplace.
              </p>
              <h2 className="text-3xl font-bold mt-10 mb-6 text-purple-200">
                Tailored Solutions for Every Brand
              </h2>
              <p>
                Understanding that each brand has unique needs and challenges,
                12Twelve takes a personalized approach to every project. Their
                team of experts works closely with clients to develop customized
                marketing strategies that align perfectly with their goals and
                target audience.
              </p>
              <h2 className="text-3xl font-bold mt-10 mb-6 text-purple-200">
                Data-Driven Decision Making
              </h2>
              <p>
                In the age of big data, 12Twelve harnesses the power of
                analytics to inform their strategies and measure success. By
                utilizing advanced tracking and reporting tools, they provide
                clients with valuable insights and continuously optimize
                campaigns for maximum ROI.
              </p>
              <h2 className="text-3xl font-bold mt-10 mb-6 text-purple-200">
                A Holistic Approach to Marketing
              </h2>
              <p>
                From brand development and content creation to social media
                management and SEO, 12Twelve offers a comprehensive suite of
                services. This integrated approach ensures consistency across
                all marketing channels and maximizes the impact of each
                campaign.
              </p>
              <h2 className="text-3xl font-bold mt-10 mb-6 text-purple-200">
                Conclusion
              </h2>
              <p>
                As businesses continue to navigate the complexities of the
                digital landscape, agencies like 12Twelve Marketing are becoming
                invaluable partners in achieving success. With their innovative
                approach, data-driven strategies, and commitment to client
                success, 12Twelve is truly elevating brands to new heights in
                the world of marketing.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-purple-400/30">
              <h3 className="text-2xl font-bold mb-6 text-purple-200 flex items-center">
                <Share2Icon className="w-6 h-6 mr-2" />
                Share this article
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="bg-purple-500/20 text-purple-100 px-6 py-3 rounded-full hover:bg-purple-400/30 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex-1 text-center"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="bg-purple-600/20 text-purple-100 px-6 py-3 rounded-full hover:bg-purple-500/30 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex-1 text-center"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="bg-purple-400/20 text-purple-100 px-6 py-3 rounded-full hover:bg-purple-300/30 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex-1 text-center"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-500/50 text-purple-100 p-3 rounded-full shadow-lg hover:bg-purple-400/60 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
