import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { revealText } from "@/utils/animations";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";

const navItems = [
   { label: "Home", href: "#home" },
   { label: "Services", href: "#services" },
   { label: "Projects", href: "#projects" },
   { label: "FAQ", href: "#faq" },
];

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

export default function Layout({ children }: { children: React.ReactNode }) {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   useEffect(() => {
      const texts = document.querySelectorAll(".reveal-text");
      texts.forEach((text) => revealText(text as unknown as string));
   }, []);

   const handleMenuClick = () => {
      setIsMobileMenuOpen(false);
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
                     SoonDevelope
                  </motion.div>
                  <div className="hidden md:flex items-center space-x-8">
                     {navItems.map((item) => (
                        <a
                           key={item.label}
                           href={item.href}
                           className="text-text-primary hover:text-secondary transition-colors"
                        >
                           {item.label}
                        </a>
                     ))}

                     <div className="flex items-center">
                        <a
                           href="#contact"
                           className="text-secondary bg-special py-2 px-4 rounded-lg hover:bg-special/80 transition-all"
                           style={{ display: "inline-block" }}
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
                        {navItems.map((item) => (
                           <a
                              key={item.label}
                              href={item.href}
                              onClick={handleMenuClick}
                              className="block text-text-primary py-2 hover:text-secondary transition-colors"
                           >
                              {item.label}
                           </a>
                        ))}
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </nav>
         <AnimatePresence mode="wait">
            <main className="">{children}</main>
         </AnimatePresence>
         <Footer />
      </div>
   );
}
