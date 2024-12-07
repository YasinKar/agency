import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-12">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-secondary mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 bg-primary/50 border border-secondary/30 rounded-md text-secondary" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-secondary mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 bg-primary/50 border border-secondary/30 rounded-md text-secondary" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-secondary mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 bg-primary/50 border border-secondary/30 rounded-md text-secondary" required></textarea>
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-special text-secondary rounded-md hover:bg-spotlight transition-colors">Send Message</button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

