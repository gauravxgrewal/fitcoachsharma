import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrolled = (window.scrollY / totalHeight) * 100;
                    setProgress(scrolled);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-brand-600 origin-left z-40"
            style={{ scaleX: progress / 100 }}
            initial={{ scaleX: 0 }}
        />
    );
};

export default ScrollProgressBar;
