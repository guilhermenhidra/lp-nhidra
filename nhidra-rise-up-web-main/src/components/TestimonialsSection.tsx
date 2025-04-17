
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };

      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
    return undefined;
  }, []);

  const testimonials = [
    {
      text: "O treinamento da NHIDRA transformou por completo nossa equipe de vendas. Em apenas 3 meses, aumentamos nosso faturamento em 170%. A metodologia é prática e eficiente.",
      author: "Carlos Mendes",
      position: "Diretor Comercial, TechSolutions"
    },
    {
      text: "Como gestora, sempre busquei ferramentas para melhorar o desempenho da minha equipe. O treinamento em liderança da NHIDRA me deu exatamente os recursos que eu precisava.",
      author: "Ana Luiza Castro",
      position: "Gerente de Operações, Grupo MaxiShop"
    },
    {
      text: "O site desenvolvido pelo NHIDRA Booster multiplicou nossas conversões em 4x. A análise detalhada de UX e o foco em conversão fizeram toda a diferença para o nosso negócio.",
      author: "Rafael Gomes",
      position: "CEO, StartGrow Consultoria"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-24 bg-nhidra-bg/80 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos <span className="nhidra-gradient-text animate-gradient">clientes</span> dizem</h2>
          <div className="h-1 w-20 nhidra-gradient-btn rounded-full mx-auto"></div>
        </div>

        <div ref={sectionRef} className="section-fade-in">
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-gradient-to-b from-nhidra-bg/50 to-nhidra-bg border border-nhidra-purple/20 rounded-xl p-8 md:p-10 text-center">
                      <Quote className="h-12 w-12 text-nhidra-purple/40 mx-auto mb-6" />
                      <p className="text-xl md:text-2xl italic mb-10 text-nhidra-text/90">"{testimonial.text}"</p>
                      <div>
                        <p className="font-bold text-lg">{testimonial.author}</p>
                        <p className="text-nhidra-text/70">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-10 space-x-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full border border-nhidra-purple/30 text-nhidra-text hover:bg-nhidra-purple/20 hover:border-nhidra-purple/50 transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-nhidra-purpleLight' : 'bg-nhidra-text/30'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full border border-nhidra-purple/30 text-nhidra-text hover:bg-nhidra-purple/20 hover:border-nhidra-purple/50 transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
