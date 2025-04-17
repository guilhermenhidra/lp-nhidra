
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de receber um diagnóstico gratuito para minha empresa.");
    window.open(`https://wa.me/5500000000000?text=${message}`, '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nhidra-purple/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-nhidra-purpleLight/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 max-w-4xl">
              Formando os maiores <span className="nhidra-gradient-text animate-gradient">vendedores, líderes e gestores</span> do Brasil.
            </h1>
            <p className="text-xl md:text-2xl text-nhidra-text/80 max-w-3xl mx-auto mb-12">
              Através de treinamentos intensivos, práticos e focados em resultados, ajudamos você a alcançar o próximo nível na sua operação.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="nhidra-gradient-btn text-white py-4 px-8 md:px-10 rounded-lg font-bold text-lg inline-flex items-center gap-3 transform hover:scale-105 transition-all duration-300"
            >
              Receba seu diagnóstico gratuito <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-16 md:mt-24 flex justify-center w-full animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              {['100+', '90%', '200%', '3x'].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="nhidra-gradient-text text-4xl md:text-5xl font-bold animate-gradient">{stat}</p>
                  <p className="text-nhidra-text/70 text-sm mt-2">
                    {index === 0 && 'Empresas atendidas'}
                    {index === 1 && 'Taxa de satisfação'}
                    {index === 2 && 'Aumento médio em vendas'}
                    {index === 3 && 'Produtividade'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
