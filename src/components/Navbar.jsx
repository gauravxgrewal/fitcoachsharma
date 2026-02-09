import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Determine active section
          const sections = ['top', 'story', 'services', 'contact-form', 'contact'];
          const scrollPosition = window.scrollY + 100;

          for (const id of sections) {
            const element = document.getElementById(id);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'top' },
    { name: 'My Story', id: 'story' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-white/95 py-4 shadow-sm'}`}>
        <div className="container mx-auto px-4 md:px-20 flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-lg md:text-xl font-bold tracking-tight text-brand-900 cursor-pointer hover:text-brand-600 transition-colors"
            onClick={() => scrollToSection('top')}
          >
            Fit Coach <span className="text-brand-600">Sharma</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium text-sm md:text-base transition-all cursor-pointer relative pb-1 ${
                  activeSection === link.id
                    ? 'text-brand-600 font-semibold'
                    : 'text-gray-600 hover:text-brand-600'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact-form')}
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-sm md:text-base transition-all shadow-lg hover:shadow-brand-500/30 cursor-pointer transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 p-2 -mr-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 400 }}
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ duration: 0.3, type: 'tween' }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-left font-medium text-sm md:text-base px-4 py-3 rounded-lg transition-colors ${
                      activeSection === link.id
                        ? 'text-brand-600 font-bold bg-brand-50'
                        : 'text-gray-800 hover:text-brand-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact-form')}
                  className="w-full bg-brand-600 text-white py-3 md:py-4 rounded-xl font-bold mt-6 shadow-md hover:bg-brand-700 transition-colors text-sm md:text-base"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 bg-brand-600 hover:bg-brand-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
