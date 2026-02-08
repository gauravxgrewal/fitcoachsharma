import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    const openWhatsApp = () => {
        const coachNumber = "919034907539";
        const message = "Hi Coach Sharma! I'm interested in your fitness program. Can you help me?";
        const url = `https://wa.me/${coachNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openWhatsApp}
            className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all flex items-center justify-center group"
        >
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        </motion.button>
    );
};

export default FloatingWhatsApp;
