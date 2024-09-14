import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-4">
            About 12otwelve
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Effective Strategies
            </h3>
            <p className="text-gray-600 mb-6">
              At 12twelve, we help you to develop effective marketing strategies
              tailored to your unique business needs and goals.
            </p>
            <a
              href="#learn-more"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Targeted Visibility
            </h3>
            <p className="text-gray-600 mb-6">
              We understand how to get the proper individuals to see your
              business on social media and through search engines.
            </p>
            <a
              href="#learn-more"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
            >
              Discover how <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full"></div>
      </div>
    </section>
  );
}
