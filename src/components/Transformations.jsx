import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Transformations = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const transformations = [
        {
            image: "/transformation1.jpg",
            title: "Skin Transformation",
            description: "51 KG → 56 KG | Bad Skin → Batter Skin"
        },
        {
            image: "/transformation2.jpg",
            title: "Muscle Transformation",
            description: "Complete body transformation with proper training and nutrition"
        }
    ];

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % transformations.length);
    };

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    };

    return (
        <section className="py-20 bg-brand-50">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Real Transformations</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Success Stories That Inspire
                    </h2>
                    <p className="text-gray-600">
                        See the incredible transformations <br /> that we have achieved.
                    </p>
                </div>

                {/* Transformations Carousel */}
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-2xl mx-auto"
                            >
                                <div className="relative flex justify-center">
                                    <img
                                        src={transformations[activeIndex].image}
                                        alt={transformations[activeIndex].title}
                                        className="w-full md:w-96 lg:w-96 h-auto object-cover"
                                    />
                                </div>

                                {/* Title and Description */}
                                <div className="p-8 md:p-12 bg-gradient-to-r from-brand-50 to-blue-50">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                        {transformations[activeIndex].title}
                                    </h3>
                                    <p className="text-lg text-gray-700">
                                        {transformations[activeIndex].description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} className="text-brand-600" />
                        </button>

                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} className="text-brand-600" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-3 justify-center mt-8">
                            {transformations.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`transition-all duration-300 ${
                                        index === activeIndex
                                            ? 'bg-brand-600 w-3 h-3 rounded-full'
                                            : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transformations;
