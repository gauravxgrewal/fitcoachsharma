import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const CounterNumber = ({ target, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const end = parseInt(target);
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return <span>{count}+</span>;
};

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, setRef] = React.useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.5 });

        if (ref) observer.observe(ref);
        return () => observer.disconnect();
    }, [ref]);

    const statsData = [
        { value: "300", label: "Workout Sessions Delivered", sub: "WORKOUT SESSIONS DELIVERED" },
        { value: "500", label: "Happy Clients", sub: "HAPPY CLUB MEMBERS" },
        { value: "10", label: "Years Experience", sub: "YEARS OF EXPERIENCE" }
    ];

    return (
        <section ref={setRef} className="bg-brand-950 py-16 text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl md:-mr-16 md:-mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl md:-ml-16 md:-mb-16"></div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Context / Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <div className="flex items-center space-x-2 text-brand-400 font-bold text-lg mb-2">
                            <Trophy className="text-amber-400" size={24} />
                            <span>Proven Track Record</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-4 leading-tight text-white">
                            Guiding clients toward healthier lifestyles with proven strategies.
                        </h2>
                        <p className="text-sm  text-brand-100/80 leading-relaxed">
                            Decade of hands-on coaching experience, delivering results that last a lifetime.
                        </p>
                    </motion.div>

                    {/* Stats Cards */}
                    <div className=" lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {statsData.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-brand-900/50 backdrop-blur-sm border border-brand-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-brand-800/50 transition-colors group"
                            >
                                <span className="text-3xl md:text-4xl font-bold text-brand-400 mb-2 group-hover:scale-110 transition-transform block">
                                    {isVisible ? <CounterNumber target={stat.value} isVisible={isVisible} /> : '0+'}
                                </span>
                                <span className="text-xs font-bold tracking-widest text-brand-200/60 uppercase">
                                    {stat.sub}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
