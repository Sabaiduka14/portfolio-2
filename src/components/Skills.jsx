import { motion } from "framer-motion";
import firebase from "../assets/firebase.png";
import js from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import reactjs from "../assets/reactjs.png";
import tailwindcss from "../assets/tailwindcss.png";

const Skills = () => {
  const images = [
    { src: firebase, alt: "Firebase" },
    { src: js, alt: "JavaScript" },
    { src: nextjs, alt: "Next.js" },
    { src: reactjs, alt: "React.js" },
    { src: tailwindcss, alt: "Tailwind CSS" },
    {
      src: "data:image/png;base64,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",
      alt: "TypeScript",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SsZ3T7fvbM-GOtMBPlhfNopulHhbAABRrg&s",
      alt: "MongoDB",
    },
    {
      src: "data:image/png;base64,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",
      alt: "GitHub",
    },
  ];

  return (
    <main className="container mx-auto p-4 md:p-8 mt-6 rounded-lg">
      <h1 className="text-center text-3xl font-bold mb-8">My Skills</h1>
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-16 md:w-20 h-auto object-contain"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          />
        ))}
      </motion.div>
    </main>
  );
};

export default Skills;
