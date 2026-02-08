import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "IT Professional",
            result: "Lost 8 KG",
            image: "👩‍💼",
            text: "Coach Sharma's approach to nutrition is completely different. He made me understand that diet isn't about restriction but about making smart choices. I feel more energetic than ever!",
            rating: 5
        },
        {
            name: "Rajesh Kumar",
            role: "Business Owner",
            result: "Gained 6 KG Muscle",
            image: "👨‍💼",
            text: "As a busy entrepreneur, I didn't have time for complex fitness plans. Coach's structured approach fits perfectly into my schedule. The results speak for themselves.",
            rating: 5
        },
        {
            name: "Neha Patel",
            role: "Homemaker",
            result: "Reversed Prediabetes",
            image: "👩‍🦰",
            text: "I was scared of my health issues, but Coach Sharma's holistic approach changed everything. Now my blood sugar levels are normal, and my family is following the healthy lifestyle too!",
            rating: 5
        },
        {
            name: "Amit Singh",
            role: "Software Engineer",
            result: "Lost 12 KG Fat",
            image: "👨‍💻",
            text: "The best part is no crash diets or starving. I still eat Indian food, just smarter portions. Coach keeps me accountable and motivated throughout the journey.",
            rating: 5
        }
    ];

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Success Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Real Results from Real People
                    </h2>
                    <p className="text-gray-600">
                        See how clients like you have transformed their lives with sustainable nutrition and lifestyle changes.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="bg-linear-to-br from-brand-50 to-blue-50 p-8 md:p-12 rounded-3xl border border-gray-200 shadow-lg"
                            >
                                {/* Top Section */}
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="text-6xl">{testimonials[activeIndex].image}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">
                                                {testimonials[activeIndex].name}
                                            </h3>
                                            <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
                                            <div className="flex gap-1 mt-2">
                                                {Array(testimonials[activeIndex].rating).fill(0).map((_, i) => (
                                                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-brand-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                                        {testimonials[activeIndex].result}
                                    </div>
                                </div>

                                {/* Quote */}
                                <p className="text-gray-700 text-lg leading-relaxed italic mb-8">
                                    "{testimonials[activeIndex].text}"
                                </p>

                                {/* Dots Navigation */}
                                <div className="flex items-center justify-center gap-2 mb-6">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`h-2 rounded-full transition-all ${
                                                index === activeIndex
                                                    ? 'bg-brand-600 w-8'
                                                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prev}
                                className="bg-brand-600 hover:bg-brand-700 text-white p-3 rounded-full shadow-lg transition-all"
                            >
                                <ChevronLeft size={24} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={next}
                                className="bg-brand-600 hover:bg-brand-700 text-white p-3 rounded-full shadow-lg transition-all"
                            >
                                <ChevronRight size={24} />
                            </motion.button>
                        </div>
                    </div>

                    {/* Stats Below Carousel */}
                    <div className="grid grid-cols-3 gap-4 mt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center p-6 bg-brand-50 rounded-2xl"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">500+</div>
                            <p className="text-sm text-gray-700 font-medium">Happy Clients</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center p-6 bg-blue-50 rounded-2xl"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">95%</div>
                            <p className="text-sm text-gray-700 font-medium">Success Rate</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center p-6 bg-green-50 rounded-2xl"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">10+</div>
                            <p className="text-sm text-gray-700 font-medium">Years Expert</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
