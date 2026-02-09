import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Salad, Activity, ArrowRight } from 'lucide-react';

const Services = () => {
    const scrollToForm = () => {
        const formSection = document.getElementById('contact-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const services = [
        {
            title: "Weight Management",
            desc: "Scientific approach to Fat Loss & Muscle Gain without starving.",
            icon: <Scale size={40} className="text-brand-500" />,
            color: "bg-brand-50",
            borderColor: "border-l-4 border-green-500",
            hoverBg: "hover:bg-brand-50"
        },
        {
            title: "Personalized Nutrition",
            desc: "Custom diet plans tailored to your body type, taste, and lifestyle.",
            icon: <Salad size={40} className="text-orange-500" />,
            color: "bg-orange-50",
            borderColor: "border-l-4 border-orange-500",
            hoverBg: "hover:bg-orange-50"
        },
        {
            title: "Healthy Lifestyle",
            desc: "Holistic guidance for you and your family to stay disease-free.",
            icon: <Activity size={40} className="text-blue-500" />,
            color: "bg-blue-50",
            borderColor: "border-l-4 border-blue-500",
            hoverBg: "hover:bg-blue-50"
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How I Can Help You</h2>
                    <p className="text-gray-600">
                        Expert guidance to help you reach your peak potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all border ${service.borderColor} group overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-brand-500/10 to-transparent rounded-full md:-mr-8 md:-mt-8 group-hover:scale-150 transition-transform"></div>
                            
                            <div className='flex gap-5 justify-start items-center mb-4'>
                                <motion.div 
                                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                                    whileHover={{ rotate: 5 }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                            </div>
                            
                            <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                {service.desc}
                            </p>

                            <motion.button
                                onClick={scrollToForm}
                                whileHover={{ x: 4 }}
                                className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors"
                            >
                                Learn More <ArrowRight size={16} />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
