import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              JD
            </motion.a>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating beautiful digital experiences with modern web
              technologies.
            </p>
          </div>

          <div className="flex space-x-4">
            {[
              {
                icon: <Github className="w-5 h-5" />,
                href: "https://github.com",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                href: "https://linkedin.com",
              },
              {
                icon: <Twitter className="w-5 h-5" />,
                href: "https://twitter.com",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                href: "mailto:contact@johndeveloper.com",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-900/30 hover:text-blue-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} John Developer. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              whileHover={{ x: 2 }}
              className="text-gray-500 hover:text-white text-sm"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ x: 2 }}
              className="text-gray-500 hover:text-white text-sm"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
