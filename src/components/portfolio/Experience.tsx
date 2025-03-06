import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Tech Innovators Inc.",
      position: "Senior Frontend Developer",
      period: "2021 - Present",
      description: [
        "Led the development of a React-based dashboard that increased user engagement by 40%",
        "Implemented performance optimizations that reduced load time by 60%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      company: "Digital Solutions LLC",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      description: [
        "Developed and maintained multiple client websites using React and Node.js",
        "Created RESTful APIs and integrated third-party services",
        "Collaborated with design team to implement responsive UI components",
      ],
    },
    {
      company: "WebCraft Agency",
      position: "Frontend Developer",
      period: "2017 - 2019",
      description: [
        "Built interactive web applications using JavaScript and modern frameworks",
        "Converted design mockups into responsive, cross-browser compatible websites",
        "Optimized websites for maximum speed and scalability",
      ],
    },
  ];

  return (
    <div className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in the world of web development.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? "md:text-right md:pr-12 md:ml-auto md:mr-0" : "md:text-left md:pl-12"} md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-0 md:left-auto md:right-0 md:translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transform -translate-y-1/2 md:translate-y-0"></div>

              {/* Content */}
              <div className="ml-8 md:ml-0 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-2">
                  {exp.period}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {exp.position}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {exp.company}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-400 flex items-start"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
