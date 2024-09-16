import { CalendarIcon, ClockIcon, TagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
  return (
    <div className="bg-purple-50 min-h-screen">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-purple-800">
            12Twelve Marketing Agency: Elevating Brands with Strategic
            Innovation
          </h1>
          <div className="flex justify-center items-center space-x-4 text-sm text-purple-600">
            <span className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" />
              September 16, 2024
            </span>
            <span className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-1" />5 min read
            </span>
            <span className="flex items-center">
              <TagIcon className="w-4 h-4 mr-1" />
              Marketing, Innovation
            </span>
          </div>
        </header>
        <Image
          src="/marketing.jpg"
          alt="12Twelve Marketing Agency"
          width={800}
          height={400}
          className="rounded-lg mb-8 shadow-lg"
        />
        <div className="prose prose-lg max-w-none prose-purple">
          <p>
            In today&apos;s fast-paced digital world, standing out from the
            competition requires more than just good products or services—it
            demands strategic innovation, creative campaigns, and a deep
            understanding of market trends.{" "}
            <strong>12Twelve Marketing Agency</strong>, a full-service marketing
            firm, is making waves by offering cutting-edge solutions tailored to
            help brands achieve their goals with precision and efficiency. With
            a unique blend of creativity and data-driven strategies, 12Twelve is
            revolutionizing the way businesses approach marketing in the digital
            age.
          </p>
          <h2>The Power of Strategic Innovation</h2>
          <p>
            At the core of 12Twelve&apos;s success is their commitment to
            strategic innovation. By constantly staying ahead of industry trends
            and leveraging the latest technologies, they provide their clients
            with a competitive edge in an ever-evolving marketplace.
          </p>
          <h2>Tailored Solutions for Every Brand</h2>
          <p>
            Understanding that each brand has unique needs and challenges,
            12Twelve takes a personalized approach to every project. Their team
            of experts works closely with clients to develop customized
            marketing strategies that align perfectly with their goals and
            target audience.
          </p>
          <h2>Data-Driven Decision Making</h2>
          <p>
            In the age of big data, 12Twelve harnesses the power of analytics to
            inform their strategies and measure success. By utilizing advanced
            tracking and reporting tools, they provide clients with valuable
            insights and continuously optimize campaigns for maximum ROI.
          </p>
          <h2>A Holistic Approach to Marketing</h2>
          <p>
            From brand development and content creation to social media
            management and SEO, 12Twelve offers a comprehensive suite of
            services. This integrated approach ensures consistency across all
            marketing channels and maximizes the impact of each campaign.
          </p>
          <h2>Conclusion</h2>
          <p>
            As businesses continue to navigate the complexities of the digital
            landscape, agencies like 12Twelve Marketing are becoming invaluable
            partners in achieving success. With their innovative approach,
            data-driven strategies, and commitment to client success, 12Twelve
            is truly elevating brands to new heights in the world of marketing.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-200">
          <h3 className="text-lg font-semibold mb-4 text-purple-800">
            Share this article:
          </h3>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
