'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Service } from '@/types/service.types'

type ServiceSliderProps = {
    service: Service
}

const ServiceShowcase: React.FC<ServiceSliderProps> = ({ service }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    console.log(service.service_images);
    

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % (service?.service_images.length || 1)
        )
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + (service?.service_images.length || 1)) % (service?.service_images.length || 1)
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
                        src={service.service_images[currentImageIndex].image}
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
                    Image {currentImageIndex + 1} of {service.service_images.length}
                </p>
            </div>
        </div>
    )
}

export default ServiceShowcase