'use client'

import { motion } from 'framer-motion';
import React from 'react'

type AboutProps = {
  about: string
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section id="about" className="py-20 bg-primary/30">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-12">
          About Us
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary/50 backdrop-blur-lg rounded-lg p-6 text-center"
        >
          <p className="text-lg text-secondary/90 ">{about}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default About