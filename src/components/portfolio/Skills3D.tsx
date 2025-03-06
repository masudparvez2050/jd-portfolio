import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  color: string;
}

const Skills3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skills: Skill[] = [
    { name: "React", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Node.js", color: "#339933" },
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "Tailwind", color: "#06B6D4" },
    { name: "Next.js", color: "#000000" },
    { name: "GraphQL", color: "#E10098" },
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "Docker", color: "#2496ED" },
    { name: "Git", color: "#F05032" },
    { name: "AWS", color: "#FF9900" },
    { name: "Firebase", color: "#FFCA28" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let radius = Math.min(container.offsetWidth, container.offsetHeight) * 0.3;
    const tags = container.querySelectorAll(".skill-tag");
    let beta = 0;
    let alpha = 0;
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId: number;

    // Position tags in 3D space
    const positionTags = () => {
      if (tags.length === 0) return;

      const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

      tags.forEach((tag, i) => {
        const y = 1 - (i / (tags.length - 1)) * 2; // y goes from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y); // radius at y position

        const theta = phi * i; // Golden angle increment

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        const tagElement = tag as HTMLElement;
        tagElement.style.transform = `translate3d(${x * radius}px, ${y * radius}px, ${z * radius}px)`;

        // Adjust opacity based on z position (items in front are more visible)
        const opacity = 0.7 + (0.3 * (z + 1)) / 2;
        tagElement.style.opacity = opacity.toString();

        // Adjust scale based on z position (items in front are larger)
        const scale = 0.8 + (0.4 * (z + 1)) / 2;
        tagElement.style.scale = scale.toString();
      });
    };

    // Initial positioning
    positionTags();

    // Rotate the sphere on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX =
        ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 0.1;
      mouseY =
        ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 0.1;
    };

    // Animation loop
    const animate = () => {
      // Slowly rotate the sphere
      alpha += mouseX * 0.05;
      beta += mouseY * 0.05;

      // Apply rotation to the container
      container.style.transform = `rotateY(${alpha}rad) rotateX(${beta}rad)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", positionTags);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", positionTags);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="relative h-[500px] perspective-1000 flex items-center justify-center">
          <div
            ref={containerRef}
            className="relative w-full h-full transform-style-3d transition-transform duration-200 ease-out"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-tag absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full font-medium text-white shadow-lg transform-style-3d transition-transform duration-200 ease-out"
                style={{
                  backgroundColor: skill.color,
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills3D;
