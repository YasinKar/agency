import { motion } from 'framer-motion'

const services = [
  {
    title: 'Web Development',
    description: 'Creating powerful, scalable web applications with cutting-edge technologies.',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting beautiful, intuitive interfaces that users love to interact with.',
    icon: '🎨',
  },
  {
    title: 'Mobile Development',
    description: 'Building native and cross-platform mobile applications.',
    icon: '📱',
  },
  {
    title: 'Digital Marketing',
    description: 'Growing your digital presence with data-driven marketing strategies.',
    icon: '📈',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary/50 backdrop-blur-lg p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-text-primary">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

