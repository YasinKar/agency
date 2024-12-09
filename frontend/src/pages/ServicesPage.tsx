import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Loading from '../components/Loading'
import Comments from '../components/Comments'

interface Service {
  label: string
  title: string
  description: string
  gallery: string[]
}


const fakeServices: Service[] = [
  {
    label: 'web-development',
    title: 'Web Development',
    description: 'We create responsive and dynamic websites tailored to your needs. Our team of expert developers uses cutting-edge technologies to build fast, secure, and scalable web applications that drive your business forward.',
    gallery: ['https://random-image-pepebigotes.vercel.app/api/random-image', 'https://random-image-pepebigotes.vercel.app/api/random-image', 'https://random-image-pepebigotes.vercel.app/api/random-image']
  },
  {
    label: 'app-development',
    title: 'App Development',
    description: 'From concept to launch, we build mobile apps for iOS and Android that engage users and deliver real value. Our app development process ensures your product stands out in the crowded app marketplace.',
    gallery: ['https://random-image-pepebigotes.vercel.app/api/random-image', 'https://random-image-pepebigotes.vercel.app/api/random-image', 'https://random-image-pepebigotes.vercel.app/api/random-image']
  }
]


export default function ServicesPage() {
  const { serviceLabel } = useParams<{ serviceLabel: string }>()
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  //SHABIH SAZI API 
  useEffect(() => {
    const fetchService = async () => {
      setLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const foundService = fakeServices.find(s => s.label === serviceLabel)
        setService(foundService || null)
      } catch (error) {
        console.error('Error fetching service:', error)
        setService(null)
      } finally {
        setLoading(false)
      }
    }
    fetchService()
  }, [serviceLabel])






  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % (service?.gallery.length || 1)
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + (service?.gallery.length || 1)) % (service?.gallery.length || 1)
    )
  }

  if (loading) {
    return <Loading />
  }

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-32 text-center text-text-primary">
        <h1 className="text-4xl font-bold mb-4 text-secondary">Service Not Found</h1>
        <p className="text-lg">The requested service does not exist.</p>
        <Link to="/" className="mt-8 inline-block text-secondary hover:text-special transition-colors">
          Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-32 text-text-primary min-h-screen flex flex-col justify-center">
      <motion.h1 
        className="text-5xl font-bold mb-8 text-secondary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {service.title}
      </motion.h1>
      <motion.p 
        className="mb-12 text-xl max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {service.description}
      </motion.p>
      <div className="relative mb-12 w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImageIndex}
            src={service.gallery[currentImageIndex]} 
            alt={`${service.title} gallery image ${currentImageIndex + 1}`}
            className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <motion.button 
          onClick={prevImage} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/80 text-secondary p-4 rounded-full hover:bg-special/80 hover:scale-110 transition-all"
        >
          &#8592;
        </motion.button>
        <motion.button 
          onClick={nextImage} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/80 text-secondary p-4 rounded-full hover:bg-special/80 hover:scale-110 transition-all"
        >
          &#8594;
        </motion.button>
      </div>
      <div className="text-center">
        <p className="text-sm text-text-primary/80 mb-8">
          Image {currentImageIndex + 1} of {service.gallery.length}
        </p>
      </div>
      <Comments />
    </div>
  )
}

