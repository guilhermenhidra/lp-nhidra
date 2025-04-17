
import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const BoosterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o NHIDRA Booster para minha empresa.");
    window.open(`https://wa.me/5500000000000?text=${message}`, '_blank');
  };

  const boosterFeatures = [
    "Design moderno e responsivo",
    "Otimização para conversão de leads",
    "Integração com suas ferramentas de marketing",
    "Analytics avançado para acompanhamento",
    "Suporte técnico especializado"
  ];

  return (
    <section id="booster" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-nhidra-purple/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={sectionRef} className="section-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="nhidra-gradient-text animate-gradient">NHIDRA | Booster</span>
              </h2>
              <p className="text-xl mb-8 text-nhidra-text/80">
                Sites personalizados com foco em conversão.
                Receba um diagnóstico completo da sua operação e um mapa estratégico personalizado para resolver os principais gargalos do seu negócio.
              </p>

              <div className="space-y-3 mb-8">
                {boosterFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-nhidra-purpleLight mr-3 flex-shrink-0" />
                    <span className="text-nhidra-text/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="nhidra-gradient-btn text-white py-3 px-8 rounded-lg font-bold inline-flex items-center gap-3 hover:shadow-lg transition-all duration-300"
              >
                Quero um site de alta conversão <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-nhidra-purple/20 to-nhidra-purpleLight/20 rounded-xl filter blur-md transform -rotate-3"></div>
                <img 
                  src="https://i.postimg.cc/d0K3f9Pf/NHIDRA-BOOSTER-IMAGEM-PNG.png" 
                  alt="NHIDRA Booster" 
                  className="relative z-10 max-w-full h-auto rounded-lg transform rotate-3 hover:rotate-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoosterSection;
