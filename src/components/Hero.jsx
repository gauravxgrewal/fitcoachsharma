import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Only add scroll listener on desktop
        if (isMobile) return;

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    const scrollToForm = () => {
        const formSection = document.getElementById('contact-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">

            {/* Background Gradient with Parallax */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-brand-100 via-white to-white"
                    style={isMobile ? {} : { y: scrollY * 0.5 }}
                ></motion.div>
                <motion.div 
                    className="absolute top-20 md:left-[-10%] left-0 w-125 h-125 bg-brand-300/30 rounded-full md:blur-[100px]"
                    style={isMobile ? {} : { y: scrollY * 0.3 }}
                ></motion.div>
                <motion.div 
                    className="absolute bottom-0 right-0 w-150 h-150 bg-brand-300/50 rounded-full md:blur-[80px]"
                    style={isMobile ? {} : { y: scrollY * 0.2 }}
                ></motion.div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">

                    {/* Text Content - Left Side */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-6 border border-brand-200">
                                <Wrench size={14} className="fill-brand-700" />
                                Built for Real Life
                            </div>

                            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                                Your Body Isn't <br />
                                the Problem. <br />
                                <span className="text-brand-500">
                                    Your Plan Is.
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed"
                        >
                            Most people don't fail fitness — they follow plans that were never designed for real schedules, real stress, and real life. This one is.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            onClick={scrollToForm}
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 bg-gray-900 hover:bg-black text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 inline-block"
                        >
                            Start Your Transformation
                        </motion.button>
                    </div>

                    {/* Right Side - Image Card */}
                    <div className="w-full lg:w-125 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            style={{ y: scrollY * -0.1 }}
                            className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl"
                        >
                            {/* Image Aspect Ratio Container */}
                            <div className="aspect-4/5 md:aspect-square w-full relative group">
                                <img
                                    src="/hero.png"
                                    alt="Deepak Kumar Coach"
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 to-transparent"></div>

                                {/* Badge Animation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                                >
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                                    </span>
                                    <span className="text-sm font-semibold text-gray-900">Available Now</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Decorative Element behind image */}
                        <motion.div 
                            className="absolute -inset-4 bg-brand-200/50 rounded-[3rem] -z-10 blur-xl"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        ></motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
