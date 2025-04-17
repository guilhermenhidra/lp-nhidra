
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de receber um diagnóstico gratuito para minha empresa.");
    window.open(`https://wa.me/5500000000000?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-nhidra-purple/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-nhidra-bg/80 to-nhidra-bg border border-nhidra-purple/30 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para <span className="nhidra-gradient-text animate-gradient">transformar</span> seus resultados?</h2>
            <p className="text-xl text-nhidra-text/80">
              Receba um diagnóstico gratuito e descubra como podemos potencializar o desempenho da sua empresa.
            </p>
          </div>
          
          <div className="flex justify-center mt-10">
            <button
              onClick={handleWhatsAppClick}
              className="nhidra-gradient-btn text-white py-4 px-10 md:px-12 rounded-lg font-bold text-lg inline-flex items-center gap-3 transform hover:scale-105 transition-all duration-300"
            >
              Quero meu diagnóstico gratuito <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
