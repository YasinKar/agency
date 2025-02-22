import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive online store with seamless checkout experience.',
    image: 'https://random-image-pepebigotes.vercel.app/api/random-image',
    category: 'Web Development',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile application for tracking workouts and nutrition.',
    image: 'https://random-image-pepebigotes.vercel.app/api/random-image',
    category: 'Mobile Development',
  },
  {
    title: 'Corporate Rebrand',
    description: 'Complete visual identity overhaul for a Fortune 500 company.',
    image: 'https://random-image-pepebigotes.vercel.app/api/random-image',
    category: 'UI/UX Design',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-primary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary/50 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-2">{project.title}</h3>
                <p className="text-text-primary mb-4">{project.description}</p>
                <span className="text-special text-sm">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

