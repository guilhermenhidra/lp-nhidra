
import { useEffect, useRef } from 'react';
import { Target, BarChart3, TrendingUp } from 'lucide-react';

const AboutSection = () => {
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

  const values = [
    {
      icon: <Target className="h-10 w-10 text-nhidra-purpleLight" />,
      title: "Missão",
      description: "Transformar operações de vendas e gestão, criando um impacto mensurável nos resultados dos nossos clientes."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-nhidra-purpleLight" />,
      title: "Visão",
      description: "Ser reconhecida como a empresa líder em treinamentos de alto desempenho para vendas, liderança e gestão no Brasil."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-nhidra-purpleLight" />,
      title: "Valores",
      description: "Excelência, resultados mensuráveis, foco no cliente, inovação constante e compromisso com o crescimento sustentável."
    }
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-nhidra-purple/10 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a <span className="nhidra-gradient-text animate-gradient">NHIDRA</span></h2>
          <div className="h-1 w-20 nhidra-gradient-btn rounded-full mx-auto"></div>
        </div>

        <div ref={sectionRef} className="section-fade-in">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl leading-relaxed">
              A NHIDRA nasceu com um propósito claro: elevar o padrão de desempenho em vendas e gestão no Brasil. 
              Com metodologia própria e uma abordagem prática, transformamos conhecimento em resultados mensuráveis para empresas 
              que buscam crescimento exponencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-nhidra-bg/30 backdrop-blur-sm border border-nhidra-purple/20 rounded-xl p-8 flex flex-col items-center text-center hover:border-nhidra-purple/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-nhidra-text/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
