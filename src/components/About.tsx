import { motion } from "framer-motion";
import { ArrowRight, BarChart, Search, Users, Megaphone } from "lucide-react";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-4">
            About 12twelve
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Effective Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                At 12twelve, we help you to develop effective marketing
                strategies tailored to your unique business needs and goals. Our
                expertise ensures that your marketing efforts are focused and
                impactful.
              </p>
              <a
                href="#learn-more"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Targeted Visibility
              </h3>
              <p className="text-gray-600 mb-4">
                We understand how to get the proper individuals to see your
                business on social media and through search engines. Our
                targeted approach ensures your message reaches the right
                audience at the right time.
              </p>
              <a
                href="#discover-how"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
              >
                Discover how <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative"
          >
            <svg
              className="w-full h-auto"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="200"
                cy="200"
                r="200"
                fill="url(#gradient)"
                fillOpacity="0.1"
              />
              <circle
                cx="200"
                cy="200"
                r="150"
                stroke="#8B5CF6"
                strokeWidth="4"
                strokeDasharray="20 20"
              />
              <motion.circle
                cx="200"
                cy="50"
                r="40"
                fill="#8B5CF6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              <motion.circle
                cx="330"
                cy="200"
                r="40"
                fill="#8B5CF6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
              <motion.circle
                cx="70"
                cy="200"
                r="40"
                fill="#8B5CF6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              />
              <motion.circle
                cx="200"
                cy="350"
                r="40"
                fill="#8B5CF6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              />
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <foreignObject x="180" y="30" width="40" height="40">
                  <BarChart className="w-10 h-10 text-white" />
                </foreignObject>
                <foreignObject x="310" y="180" width="40" height="40">
                  <Search className="w-10 h-10 text-white" />
                </foreignObject>
                <foreignObject x="50" y="180" width="40" height="40">
                  <Users className="w-10 h-10 text-white" />
                </foreignObject>
                <foreignObject x="180" y="330" width="40" height="40">
                  <Megaphone className="w-10 h-10 text-white" />
                </foreignObject>
              </motion.g>
            </svg>
            <defs>
              <radialGradient
                id="gradient"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(200 200) rotate(90) scale(200)"
              >
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
              </radialGradient>
            </defs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
