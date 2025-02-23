'use client'

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { revealText } from "@/utils/animations";
import { BsTwitterX, BsGithub, BsLinkedin, BsInstagram, BsTelegram } from "react-icons/bs";
import { ReactNode } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings } from "@/types/content.types";
import { Service } from "@/types/service.types";

type FooterProps = {
   settings: Settings
}

const Footer: React.FC<FooterProps> = ({ settings }) => {
   return (
      <footer className="bg-primary/80 text-text-primary py-8">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-secondary">
                     {settings.site_name}
                  </h3>
                  <p className="mt-2">{settings.site_main_title}</p>
               </div>
               <div className="flex space-x-4 text-2xl">
                  <a
                     href={settings.twitter || '/'}
                     className="hover:text-secondary transition-colors"
                  >
                     <BsTwitterX />
                  </a>
                  <a
                     href={settings.github || '/'}
                     className="hover:text-secondary transition-colors"
                  >
                     <BsGithub />
                  </a>
                  <a
                     href={settings.linkedin || '/'}
                     className="hover:text-secondary transition-colors"
                  >
                     <BsLinkedin />
                  </a>
                  <a
                     href={settings.instagram || '/'}
                     className="hover:text-secondary transition-colors"
                  >
                     <BsInstagram />
                  </a>
                  <a
                     href={settings.telegram || '/'}
                     className="hover:text-secondary transition-colors"
                  >
                     <BsTelegram />
                  </a>
               </div>
            </div>
            <div className="mt-8 text-center text-sm">
               {settings.copyright}
            </div>
         </div>
      </footer>
   );
}

interface LayoutProps {
   children: ReactNode;
   services: Service[]
   settings: Settings
}

export default function Layout({ children, services, settings }: LayoutProps) {
   const pathname = usePathname();
   const isServicePage = pathname.startsWith('/service');

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

   useEffect(() => {
      const texts = document.querySelectorAll(".reveal-text");
      texts.forEach((text) => revealText(text as unknown as string));
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
                     <Link href="/">{settings.site_name}</Link>
                  </motion.div>
                  <div className="hidden md:flex items-center space-x-8">
                     {isServicePage ? (
                        <>
                           <Link href="/" className="text-text-primary hover:text-secondary transition-colors">
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
                                          {services.map((service: Service) => (
                                             <Link
                                                key={service.slug}
                                                href={`/service/${service.slug}`}
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
                                          {services.map((service: Service) => (
                                             <Link
                                                key={service.slug}
                                                href={`/service/${service.slug}`}
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
                                 href="/"
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
                                          {services.map((service: Service) => (
                                             <Link
                                                key={service.slug}
                                                href={`/service/${service.slug}`}
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
                                          {services.map((service: Service) => (
                                             <Link
                                                key={service.slug}
                                                href={`/service/${service.slug}`}
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
         <Footer settings={settings} />
      </div>
   );
}

