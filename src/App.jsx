import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import MyStory from './components/MyStory';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileActionBar from './components/MobileActionBar';
import ScrollProgressBar from './components/ScrollProgressBar';
import { ToastProvider } from './context/ToastContext';

function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-200 selection:text-brand-900">
        <ScrollProgressBar />
        <Navbar />
        <Hero />
        <Stats />
        <MyStory />
        <Services />
        <Testimonials />
        <FAQ />
        <LeadForm />
        <Footer />
        <FloatingWhatsApp />
        <MobileActionBar />
      </div>
    </ToastProvider>
  );
}

export default App;
