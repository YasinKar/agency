import { motion } from "framer-motion";
import { FaCloud, FaQuestionCircle, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >

      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, x: i * 200 - 100, y: i * 100 - 50 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
              x: [i * 200 - 100, i * 200 - 50, i * 200 - 100],
              y: [i * 100 - 50, i * 100, i * 100 - 50],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute bg-special rounded-full"
            style={{
              width: "150px",
              height: "150px",
              filter: "blur(80px)",
            }}
          />
        ))}
      </div>


      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center text-text-primary/70 text-xs md:text-sm font-medium border-2 border-secondary/50 rounded-full px-4 py-1 space-x-2">
          <FaCloud className="text-secondary/85 text-xl" />
          <span className="text-secondary/85">Empowering Digital Transformation for Businesses</span>
        </div>
      </div>


      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold text-secondary"
        >
          We Create
          <br />
          Digital Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-text-primary/90 text-lg md:text-2xl mt-6 max-w-2xl mx-auto"
        >
          Transforming ideas into exceptional digital experiences.
        </motion.p>


        <div className="flex justify-center mt-8 space-x-4">
          <a
            href="#contact"
            className="flex items-center bg-special text-secondary py-2 px-6 rounded-lg hover:bg-special/80 transition hover:scale-105 space-x-2"
          >
            <FaEnvelope className="text-secondary text-lg" /> 
            <span>Contact</span>
          </a>
          <a
            href="#faq"
            className="flex items-center bg-secondary/80 text-primary py-2 px-6 rounded-lg hover:bg-secondary/70 transition hover:scale-105 space-x-2"
          >
            <FaQuestionCircle className="text-primary text-lg" /> 
            <span>FAQ</span>
          </a>
        </div>

      </div>
    </section>
  );
}
