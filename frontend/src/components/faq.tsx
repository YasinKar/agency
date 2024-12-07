import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of digital services including web development, UI/UX design, mobile app development, and digital marketing solutions.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on scope and complexity. A typical web development project can take 8-12 weeks from concept to launch.',
  },
  {
    question: 'What is your design process?',
    answer: 'Our design process includes discovery, wireframing, design concepts, revisions, and final implementation, with client collaboration at every step.',
  },
  {
    question: 'Do you offer maintenance services?',
    answer: 'Yes, we offer ongoing maintenance and support services to ensure your digital products remain up-to-date and perform optimally.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-4 bg-primary/50 rounded-lg flex justify-between items-center"
              >
                <span className="text-secondary font-medium">{faq.question}</span>
                <span className="text-special">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 text-text-primary">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

