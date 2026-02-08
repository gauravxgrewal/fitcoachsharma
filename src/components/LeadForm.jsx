import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Check } from 'lucide-react';

const LeadForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        goal: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const formatPhoneNumber = (value) => {
        // Remove all non-digits
        const digits = value.replace(/\D/g, '');
        
        // Limit to 10 digits
        if (digits.length > 10) return formData.phone;
        
        return digits;
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, name: value });
        if (error) setError('');
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhoneNumber(e.target.value);
        setFormData({ ...formData, phone: formatted });
        
        // Real-time validation
        if (formatted.length === 10) {
            setIsPhoneValid(true);
            if (error) setError('');
        } else {
            setIsPhoneValid(false);
        }
    };

    const handleGoalChange = (e) => {
        setFormData({ ...formData, goal: e.target.value });
        if (error) setError('');
    };

    const handleWhatsAppSubmit = () => {
        const { name, phone, goal } = formData;

        // Validation: Check if phone is 10 digits
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            setError('Please enter a valid 10-digit mobile number.');
            return;
        }

        if (!name.trim()) {
            setError('Please enter your name.');
            return;
        }

        // Show success state
        setSuccess(true);

        // Coach's number (Fixed)
        const coachNumber = "919034907539";

        // Construct message
        const message = `Hi Coach Sharma, I am interested in your personal training.
    
Name: ${name || 'N/A'}
Phone: ${phone}
Goal: ${goal || 'Not specified'}

Please guide me.`;

        // Reset form and open WhatsApp after brief delay
        setTimeout(() => {
            const url = `https://wa.me/${coachNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            
            // Reset form after 1 second
            setTimeout(() => {
                setFormData({ name: '', phone: '', goal: '' });
                setSuccess(false);
                setIsPhoneValid(false);
            }, 1000);
        }, 500);
    };

    return (
        <section id="contact-form" className="py-20 pb-32 md:pb-20 bg-brand-50 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-200/40 rounded-full blur-3xl md:-ml-20 md:-mt-20"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl md:-mr-20 md:-mb-20"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">

                {/* Context Text - Left Side */}
                <div className="md:w-1/2 text-left space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm border border-green-200">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Free Consultation
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.15]">
                        Lose Weight.<br />
                        Fix Your Diet.<br />
                        <span className="text-brand-600">Without Starving.</span>
                    </h2>

                    <p className="text-m md:text-lg text-gray-600 leading-relaxed max-w-lg">
                        Personal nutrition guidance for busy people who want real, sustainable results — no crash diets, no nonsense.
                    </p>

                    <div className="space-y-2 pt-2">
                        {[
                            "500+ successful clients",
                            "7+ years of experience",
                            "Indian food focused plans"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-3 text-gray-800 font-medium text-m">
                                <div className="bg-brand-100 p-1 rounded-full text-brand-600">
                                    <CheckCircle2 size={20} strokeWidth={3} />
                                </div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Card - Right Side */}
                <AnimatePresence mode="wait">
                    {!success ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 md:p-10 rounded-4xl shadow-2xl border border-gray-100 max-w-md w-full relative z-20"
                        >
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleNameChange}
                                        className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-50 outline-none transition-all placeholder-gray-400 text-gray-900"
                                        placeholder="Your name"
                                    />
                                    {formData.name && (
                                        <motion.div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                                            <Check size={20} strokeWidth={3} />
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Whatsapp Number</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">+91</div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        maxLength={10}
                                        className={`w-full pl-14 pr-4 py-3.5 bg-gray-50 rounded-xl border transition-all outline-none focus:bg-white focus:ring-4 ${
                                            error && formData.phone
                                                ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-50'
                                                : isPhoneValid
                                                ? 'border-green-500 bg-green-50 focus:border-green-500 focus:ring-green-50'
                                                : 'border-gray-100 focus:border-brand-500 focus:ring-brand-50'
                                        } placeholder-gray-400 text-gray-900`}
                                        placeholder="9876543210"
                                    />
                                    <AnimatePresence>
                                        {error && formData.phone && (
                                            <motion.div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                                                <AlertCircle size={20} />
                                            </motion.div>
                                        )}
                                        {isPhoneValid && !error && (
                                            <motion.div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                                                <Check size={20} strokeWidth={3} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            
                            </div>

                            <div className="mb-8">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Your Goal</label>
                                <textarea
                                    name="goal"
                                    value={formData.goal}
                                    onChange={handleGoalChange}
                                    className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-50 outline-none transition-all placeholder-gray-400 text-gray-900 resize-none h-28"
                                    placeholder="Weight loss / PCOS / muscle gain / diabetes"
                                ></textarea>
                            </div>

                            <motion.button
                                type="button"
                                onClick={handleWhatsAppSubmit}
                                disabled={!formData.name || !isPhoneValid}
                                whileHover={!formData.name || !isPhoneValid ? {} : { scale: 1.02 }}
                                whileTap={!formData.name || !isPhoneValid ? {} : { scale: 0.98 }}
                                className={`w-full font-bold py-4 md:py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer text-base md:text-base ${
                                    !formData.name || !isPhoneValid
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gray-900 hover:bg-brand-600 text-white hover:shadow-2xl transform hover:-translate-y-1'
                                }`}
                            >
                                Message on WhatsApp
                                <Send size={18} className={`${!formData.name || !isPhoneValid ? '' : 'group-hover:translate-x-1'} transition-transform`} />
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white p-8 md:p-10 rounded-4xl shadow-2xl border border-gray-100 max-w-md w-full relative z-20 flex flex-col items-center justify-center min-h-100"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                className="bg-green-100 p-4 rounded-full mb-6"
                            >
                                <Check size={40} className="text-green-600" strokeWidth={3} />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Perfect!</h3>
                            <p className="text-gray-600 text-center">
                                Opening WhatsApp to connect you with Coach Sharma. He'll reach out shortly with a personalized plan.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default LeadForm;
