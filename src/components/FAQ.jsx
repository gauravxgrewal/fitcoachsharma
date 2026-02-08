import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How long does it take to see results?",
            answer: "Most clients see noticeable changes within 2-3 weeks of consistent effort. Significant transformations typically happen within 8-12 weeks. Remember, sustainable results take time, but we focus on building habits that last a lifetime."
        },
        {
            question: "Do I need to give up my favorite foods?",
            answer: "Absolutely not! We believe in eating Indian food you love. The key is portion control, timing, and balance. We create custom meal plans that include your favorite dishes in a way that supports your goals."
        },
        {
            question: "Is this program suitable for busy professionals?",
            answer: "Yes! This program is specifically designed for busy people. Quick meal prep tips, time-efficient workouts, and flexible scheduling ensure you can follow through without disrupting your work or family life."
        },
        {
            question: "What if I have medical conditions like PCOS or diabetes?",
            answer: "Great question. I specialize in working with clients who have PCOS, diabetes, thyroid issues, and other conditions. We customize everything based on your health status and work collaboratively with your doctor."
        },
        {
            question: "How often do you follow up with clients?",
            answer: "Weekly check-ins are standard. We track progress, adjust plans as needed, and provide accountability and motivation. You're never alone in this journey - I'm with you every step."
        },
        {
            question: "Can I get a free consultation before starting?",
            answer: "Yes! Every client gets a comprehensive free consultation where we discuss your goals, challenges, medical history, and create a personalized roadmap. No pressure, no commitment needed."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Common Questions</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600">
                        Got questions? Here are answers to the most common ones asked by our clients.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <motion.button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-4 md:px-8 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                whileHover={{ paddingLeft: 32 }}
                            >
                                <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown size={24} className="text-brand-600" />
                                </motion.div>
                            </motion.button>

                            <motion.div
                                initial={{ maxHeight: 0, opacity: 0 }}
                                animate={{
                                    maxHeight: activeIndex === index ? 1000 : 0,
                                    opacity: activeIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.4, type: 'tween', ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 py-4 md:px-8 md:py-5 bg-gray-50 border-t border-gray-200">
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-6">Didn't find your answer?</p>
                    <motion.a
                        href="https://wa.me/919034907539?text=Hi%20Coach%20Sharma,%20I%20have%20a%20question"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        Message on WhatsApp
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
