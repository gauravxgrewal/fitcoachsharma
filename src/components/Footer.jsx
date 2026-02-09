import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const socialLinks = [
        { icon: Instagram, href: "https://www.instagram.com/fit.coach.sharma/", color: "hover:bg-pink-600", label: "Instagram" },
        { icon: Facebook, href: "https://www.facebook.com/DeepakRHCE/", color: "hover:bg-blue-600", label: "Facebook" },
        { icon: Youtube, href: "https://www.youtube.com/channel/UCBIGWcTBIn3poQm7JDdmGHQ", color: "hover:bg-red-600", label: "YouTube" },
        { icon: MessageCircle, href: "https://wa.me/919034907539", color: "hover:bg-green-600", label: "WhatsApp" }
    ];

    const quickLinks = [
        { name: 'Home', id: 'top' },
        { name: 'My Story', id: 'story' },
        { name: 'Services', id: 'services' },
        { name: 'Contact', id: 'contact-form' }
    ];

    return (
        <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl md:-mr-40 md:-mt-40\"></div>
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <motion.h2 
                            className="text-lg md:text-xl font-bold cursor-pointer"
                            onClick={() => scrollToSection('top')}
                            whileHover={{ color: '#10b981' }}
                        >
                            Fit Coach <span className="text-brand-500">Sharma</span>
                        </motion.h2>
                        <p className="text-gray-400 leading-relaxed">
                            Helping you achieve your dream physique and a healthier lifestyle with science-based nutrition.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-base md:text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.button 
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-gray-400 hover:text-brand-500 transition-colors"
                                        whileHover={{ x: 4 }}
                                    >
                                        {link.name}
                                    </motion.button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-base md:text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <motion.a 
                                    href="tel:+919034907539" 
                                    className="flex items-start space-x-3 text-gray-400 hover:text-brand-500 transition-colors"
                                    whileHover={{ x: 4 }}
                                >
                                    <Phone size={20} className="text-brand-500 mt-1 shrink-0" />
                                    <span>+91-9034907539</span>
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="mailto:focusonlyfitness@gmail.com" 
                                    className="flex items-start space-x-3 text-gray-400 hover:text-brand-500 transition-colors"
                                    whileHover={{ x: 4 }}
                                >
                                    <Mail size={20} className="text-brand-500 mt-1 shrink-0" />
                                    <span>focusonlyfitness@gmail.com</span>
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="https://maps.google.com/?q=Bhiwani,Haryana" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-start space-x-3 text-gray-400 hover:text-brand-500 transition-colors"
                                    whileHover={{ x: 4 }}
                                >
                                    <MapPin size={20} className="text-brand-500 mt-1 shrink-0" />
                                    <span>Bhiwani, Haryana</span>
                                </motion.a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-base md:text-lg font-bold mb-6">Follow Me</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center ${social.color} transition-colors`}
                                        whileHover={{ scale: 1.2, y: -4 }}
                                        whileTap={{ scale: 0.9 }}
                                        title={social.label}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm"
                >
                    &copy; {new Date().getFullYear()} Fit Coach Sharma. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
