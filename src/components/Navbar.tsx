import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple-900 bg-opacity-80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.png"
              alt="12Twelve Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-white font-bold text-xl">12Twelve</span>
          </motion.div>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#services"
                className="hover:text-purple-200 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="hover:text-purple-200 transition-colors duration-300"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-purple-200 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
