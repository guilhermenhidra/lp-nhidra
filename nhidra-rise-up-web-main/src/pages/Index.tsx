
import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TrainingsSection from '../components/TrainingsSection';
import BoosterSection from '../components/BoosterSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import IntersectionObserverComponent from '../components/IntersectionObserver';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = "NHIDRA - Treinamentos em Vendas, Liderança e Gestão";
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-nhidra-bg font-montserrat">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrainingsSection />
      <BoosterSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
      <IntersectionObserverComponent />
    </div>
  );
};

export default Index;
