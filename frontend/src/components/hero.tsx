import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 "
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
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            className="absolute bg-special rounded-full"
            style={{
              width: '150px',
              height: '150px',
              filter: 'blur(80px)',
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold text-secondary text-center"
        >
          We Create
          <br />
          Digital Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-text-primary text-xl md:text-2xl text-center mt-8 max-w-2xl mx-auto"
        >
          Transforming ideas into exceptional digital experiences through innovative design and development solutions.
        </motion.p>
      </div>
    </section>
  )
}

