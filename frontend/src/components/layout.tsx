import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { revealText } from "@/utils/animations";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";
import { ReactNode } from 'react';

interface Service {
  label: string;
  title: string;
  description: string;
  gallery: string[];
}

const fetchServices = async (): Promise<Service[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return [
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
  ];
};

function Footer() {
   const Year = new Date().getFullYear()

   return (
      <footer className="bg-primary/80 text-text-primary py-8">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-secondary">
                     SoonDevelope
                  </h3>
                  <p className="mt-2">The Sooner you get into web, The sooner you succeed.</p>
               </div>
               <div className="flex space-x-4 text-2xl">
                  <a
                     href="/"
                     className="hover:text-secondary transition-colors"
                  >
                     <BsTwitterX />
                  </a>
                  <a
                     href="/"
                     className="hover:text-secondary transition-colors"
                  >
                     <BsGithub />
                  </a>
                  <a
                     href="/"
                     className="hover:text-secondary transition-colors"
                  >
                     <BsLinkedin />
                  </a>
               </div>
            </div>
            <div className="mt-8 text-center text-sm">
               © {Year} SoonDevelope. All rights reserved.
            </div>
         </div>
      </footer>
   );
}

interface LayoutProps {
  children: ReactNode;
  isServicePage: boolean;
}

export default function Layout({ children, isServicePage }: LayoutProps) {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
   const [services, setServices] = useState<Service[]>([]);

   useEffect(() => {
      const texts = document.querySelectorAll(".reveal-text");
      texts.forEach((text) => revealText(text as unknown as string));

      fetchServices().then(setServices);
   }, []);

   const handleMenuClick = () => {
      setIsMobileMenuOpen(false);
      setIsServicesDropdownOpen(false);
   };

   return (
      <div className="bg-primary min-h-screen">
         <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4">
               <div className="flex justify-between items-center">
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="text-secondary text-2xl font-bold"
                  >
                     <Link to="/">SoonDevelope</Link>
                  </motion.div>
                  <div className="hidden md:flex items-center space-x-8">
                     {isServicePage ? (
                        <>                        
                           <Link to="/" className="text-text-primary hover:text-secondary transition-colors">
                              Home
                           </Link>
                           <div className="relative group">
                              <button
                                 onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                 className="text-text-primary hover:text-secondary transition-colors"
                              >
                                 Services
                                 <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                 </svg>
                              </button>
                              <AnimatePresence>
                                 {isServicesDropdownOpen && (
                                    <motion.div
                                       initial={{ opacity: 0, y: -10 }}
                                       animate={{ opacity: 1, y: 0 }}
                                       exit={{ opacity: 0, y: -10 }}
                                       className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-primary/80 ring-1 ring-black ring-opacity-5"
                                    >
                                       <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                          {services.map((service) => (
                                             <Link
                                                key={service.label}
                                                to={`/services/${service.label}`}
                                                className="block px-4 py-2 text-sm text-text-primary hover:bg-secondary/10 hover:text-secondary"
                                                role="menuitem"
                                                onClick={() => setIsServicesDropdownOpen(false)}
                                             >
                                                {service.title}
                                             </Link>
                                          ))}
                                       </div>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </div>
                        </>
                     ) : (
                        <>
                           <a href="#home" className="text-text-primary hover:text-secondary transition-colors">Home</a>
                           <a href="#whatweoffer" className="text-text-primary hover:text-secondary transition-colors">What We Offer</a>
                           <a href="#projects" className="text-text-primary hover:text-secondary transition-colors">Projects</a>
                           <a href="#about" className="text-text-primary hover:text-secondary transition-colors">About us</a>
                           <a href="#faq" className="text-text-primary hover:text-secondary transition-colors">FAQ</a>
                           <div className="relative group">
                              <button
                                 onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                 className="text-text-primary hover:text-secondary transition-colors"
                              >
                                 Services
                                 <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                 </svg>
                              </button>
                              <AnimatePresence>
                                 {isServicesDropdownOpen && (
                                    <motion.div
                                       initial={{ opacity: 0, y: -10 }}
                                       animate={{ opacity: 1, y: 0 }}
                                       exit={{ opacity: 0, y: -10 }}
                                       className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-primary/80 ring-1 ring-black ring-opacity-5"
                                    >
                                       <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                          {services.map((service) => (
                                             <Link
                                                key={service.label}
                                                to={`/services/${service.label}`}
                                                className="block px-4 py-2 text-sm text-text-primary hover:bg-secondary/10 hover:text-secondary"
                                                role="menuitem"
                                                onClick={() => setIsServicesDropdownOpen(false)}
                                             >
                                                {service.title}
                                             </Link>
                                          ))}
                                       </div>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </div>
                        </>
                     )}
                     <div>
                        <a
                           href="#contact"
                           className="text-secondary bg-special py-2 px-4 rounded-lg hover:bg-special/80 transition-all"
                        >
                           Contact
                        </a>
                     </div>
                  </div>
                  <div className="md:hidden">
                     <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-text-primary focus:outline-none"
                     >
                        {isMobileMenuOpen ? (
                           <span>&times;</span>
                        ) : (
                           <span>&#9776;</span>
                        )}
                     </button>
                  </div>
               </div>
               <AnimatePresence>
                  {isMobileMenuOpen && (
                     <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-primary p-4 mt-4 rounded-md"
                     >
                        {isServicePage ? (
                           <>
                              <Link
                                 to="/"
                                 onClick={handleMenuClick}
                                 className="block w-full text-text-primary py-2 hover:text-secondary transition-colors"
                              >
                                 Home
                              </Link>
                              <div>
                                 <button
                                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                    className="block w-full text-text-primary py-2 hover:text-secondary transition-colors text-left"
                                 >
                                    Services
                                    <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                 </button>
                                 <AnimatePresence>
                                    {isServicesDropdownOpen && (
                                       <motion.div
                                          initial={{ opacity: 0, y: -10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          exit={{ opacity: 0, y: -10 }}
                                          className="pl-4"
                                       >
                                          {services.map((service) => (
                                             <Link
                                                key={service.label}
                                                to={`/services/${service.label}`}
                                                className="block w-full text-text-primary py-2 hover:text-secondary transition-colors"
                                                onClick={handleMenuClick}
                                             >
                                                {service.title}
                                             </Link>
                                          ))}
                                       </motion.div>
                                    )}
                                 </AnimatePresence>
                              </div>
                           </>
                        ) : (
                           <>
                              <a
                                 href="#home"
                                 onClick={handleMenuClick}
                                 className="block w-full text-text-primary py-2 hover:text-secondary transition-colors"
                              >
                                 Home
                              </a>
                              <a
                                 href="#whatweoffer"
                                 onClick={handleMenuClick}
                                 className="block w-full text-text-primary py-2 hover:text-secondary transition-colors"
                              >
                                 What We Offer
                              </a>
                              <a
                                 href="#projects"
                                 onClick={handleMenuClick}
                                 className="block w-full text-text-primary py-2 hover:text-secondary transition-colors"
                              >
                                 Projects
                              </a>
                              <a
                                 href="#about"
                                 onClick={handleMenuClick}
                                 className="block w-full text-text-primary py-2 hover:text-secondary transition-colors"
                              >
                                 About us
                              </a>
                              <a
                                 href="#faq"
                                 onClick={handleMenuClick}
                                 className="block w-full text-text-primary py-2 hover:text-secondary transition-colors"
                              >
                                 FAQ
                              </a>
                              <div>
                                 <button
                                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                    className="block w-full text-text-primary py-2 hover:text-secondary transition-colors text-left"
                                 >
                                    Services
                                    <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                 </button>
                                 <AnimatePresence>
                                    {isServicesDropdownOpen && (
                                       <motion.div
                                          initial={{ opacity: 0, y: -10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          exit={{ opacity: 0, y: -10 }}
                                          className="pl-4"
                                       >
                                          {services.map((service) => (
                                             <Link
                                                key={service.label}
                                                to={`/services/${service.label}`}
                                                className="block w-full text-text-primary py-2 hover:text-secondary transition-colors"
                                                onClick={handleMenuClick}
                                             >
                                                {service.title}
                                             </Link>
                                          ))}
                                       </motion.div>
                                    )}
                                 </AnimatePresence>
                              </div>
                           </>
                        )}
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </nav>
         <AnimatePresence mode="wait">
            <main>{children}</main>
         </AnimatePresence>
         <Footer />
      </div>
   );
}

