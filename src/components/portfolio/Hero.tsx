import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

interface HeroProps {
  name?: string;
  title?: string;
  tagline?: string;
}

const Hero = ({
  name = "John Developer",
  title = "Full-Stack Developer",
  tagline = "A passionate developer crafting beautiful digital experiences",
}: HeroProps) => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-black to-slate-900 overflow-hidden">
      {/* 3D animated background elements */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8],
              opacity: [0, 0.2, 0],
              z: Math.random() * 100 - 50,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="flex flex-col md:flex-row items-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg mb-6 md:mb-0 md:mr-8"
          >
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=developer"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm font-light tracking-widest mb-2"
            >
              HELLO, I'M
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
              {name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-light text-blue-300 mb-2"
            >
              {title}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg font-light text-gray-300 max-w-lg"
            >
              {tagline}
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium"
          >
            View My Work
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-400 font-medium flex items-center justify-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
