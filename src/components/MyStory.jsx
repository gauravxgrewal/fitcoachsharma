import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Heart, Award } from 'lucide-react';

const MyStory = () => {
    return (
        <section id="story" className="py-20 bg-brand-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-600 font-semibold uppercase tracking-wider text-xs md:text-sm">Valid Results</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Real Stories, Real Transformation</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Story Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                            "We practice what we preach."
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                            Health is a journey, not a destination. My own transformation journey taught me that discipline and the right guidance are the keys to success.
                        </p>

                        <motion.div
                            whileHover={{ y: -4 }}
                            className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start space-x-4">
                                <motion.div 
                                    className="bg-brand-500 p-3 rounded-full text-white shrink-0"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <Trophy size={24} />
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base md:text-lg">My Transformation</h4>
                                    <p className="text-gray-700 text-sm md:text-base mt-1">
                                        I lost <span className="font-bold text-brand-700">6 KG Fat</span> while maintaining muscle mass.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -4 }}
                            className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start space-x-4">
                                <motion.div 
                                    className="bg-blue-500 p-3 rounded-full text-white shrink-0"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <Heart size={24} />
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base md:text-lg">My Wife's Journey</h4>
                                    <p className="text-gray-700 text-sm md:text-base mt-1">
                                        She gained <span className="font-bold text-blue-700">4 KG Healthy Weight</span> with a balanced approach.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium text-sm border border-gray-200 flex items-center gap-2 cursor-default hover:shadow-sm transition-shadow"
                            >
                                <Users size={16} /> Fit Couple
                            </motion.span>
                            <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium text-sm border border-gray-200 hover:shadow-sm transition-shadow cursor-default"
                            >
                                <Award size={16} className="inline mr-1" /> #75Hard Finisher
                            </motion.span>
                            <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium text-sm border border-gray-200 hover:shadow-sm transition-shadow cursor-default"
                            >
                                ✓ Certified Nutritionist
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Visual/Image Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-125 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl group"
                    >
                        {/* Couple image */}
                        <div className="absolute inset-0 bg-linear-to-br from-brand-400 to-blue-500 opacity-20"></div>
                        <motion.div 
                            className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium group-hover:opacity-90 transition-opacity"
                            whileHover={{ scale: 1.05 }}
                        >
                           <img src="/couple.webp"  loading="lazy" className="object-cover w-full h-full transition-transform group-hover:scale-110 duration-500" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MyStory;
