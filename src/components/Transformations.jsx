import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Transformations = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const transformations = [
        {
            image: "/transformation1.webp",
            title: "Skin Transformation",
            description: "51 KG → 56 KG | Bad Skin → Batter Skin",
            details: "This incredible transformation shows the power of consistent nutrition and skincare guidance. With personalized coaching, our client not only improved their physique but also achieved radiant, healthy skin.",
            benefits: ["Better Energy Levels", "Glowing Skin", "Improved Confidence", "Sustainable Results"]
        },
        {
            image: "/transformation2.webp",
            title: "Muscle Transformation",
            description: "Complete body transformation with proper training and nutrition",
            details: "Through dedicated training programs and customized nutrition plans, our client achieved an impressive muscle transformation. The combination of strength training and proper diet created lasting results.",
            benefits: ["Increased Strength", "Built Muscle Mass", "Better Posture", "Long-term Sustainability"]
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
                    <span className="text-brand-600 font-semibold uppercase tracking-wider text-xs md:text-sm">Real Transformations</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Success Stories That Inspire
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">
                        See the incredible transformations <br /> that we have achieved.
                    </p>
                </div>

                {/* Transformations Carousel */}
                <div className="max-w-6xl mx-auto px-4 md:px-0">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <div className="flex flex-col lg:flex-row items-center">
                                    {/* Image - Left Side */}
                                    <div className="w-full lg:w-1/2 relative flex justify-center p-4 md:p-8 lg:p-12 bg-brand-50">
                                        <img
                                            src={transformations[activeIndex].image}
                                            alt={transformations[activeIndex].title}
                                            className="w-full md:w-80 lg:w-full h-auto object-cover rounded-2xl "
                                             loading="lazy"
                                        />
                                    </div>

                                    {/* Title and Description - Right Side */}
                                    <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-12">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                                            {transformations[activeIndex].title}
                                        </h3>
                                        <p className="text-sm md:text-base lg:text-lg font-semibold text-brand-600 mb-3 md:mb-4">
                                            {transformations[activeIndex].description}
                                        </p>
                                        <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                                            {transformations[activeIndex].details}
                                        </p>
                                        
                                        {/* Benefits List */}
                                        <div className="space-y-2 md:space-y-3">
                                            <p className="text-xs md:text-sm lg:text-base font-semibold text-gray-900">Key Results:</p>
                                            <ul className="space-y-1 md:space-y-2">
                                                {transformations[activeIndex].benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm lg:text-base text-gray-700">
                                                        <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-100 flex-shrink-0">
                                                            <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-brand-600"></span>
                                                        </span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {/* Mobile Arrows */}
                        <button
                            onClick={prev}
                            className="absolute left-2 top-1/3 -translate-y-1/2 z-20 bg-brand-600 hover:bg-brand-700 p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex lg:hidden items-center justify-center"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} className="text-white" />
                        </button>

                        <button
                            onClick={next}
                            className="absolute right-2 top-1/3 -translate-y-1/2 z-20 bg-brand-600 hover:bg-brand-700 p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex lg:hidden items-center justify-center"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} className="text-white" />
                        </button>

                        {/* Desktop Arrows */}
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 z-20 bg-brand-600 hover:bg-brand-700 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hidden lg:flex items-center justify-center"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} className="text-white" />
                        </button>

                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 z-20 bg-brand-600 hover:bg-brand-700 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hidden lg:flex items-center justify-center"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} className="text-white" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-3 justify-center mt-8 lg:mt-12">
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
