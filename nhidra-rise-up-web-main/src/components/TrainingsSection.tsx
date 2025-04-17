
import { useEffect, useRef } from 'react';
import { Users, TrendingUp, Award } from 'lucide-react';

const TrainingsSection = () => {
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

  const trainings = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Treinamento em Vendas",
      description: "Transforme sua equipe comercial em uma máquina de resultados. Aprenda técnicas avançadas de prospecção, negociação e fechamento que realmente funcionam.",
      features: [
        "Metodologia de vendas consultivas",
        "Técnicas avançadas de objeção",
        "Scripts de alta conversão",
        "Acompanhamento prático em campo"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Treinamento em Gestão",
      description: "Desenvolva habilidades para gerenciar equipes de alto desempenho, otimize processos e aumente a produtividade do seu time de forma exponencial.",
      features: [
        "Gestão orientada por indicadores",
        "Metodologias ágeis de gestão",
        "Planejamento estratégico",
        "Sistemas de acompanhamento e controle"
      ]
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Treinamento em Liderança",
      description: "Forme líderes inspiradores capazes de extrair o melhor de suas equipes, desenvolver talentos e criar uma cultura de alta performance.",
      features: [
        "Desenvolvimento de soft skills",
        "Gestão de conflitos",
        "Comunicação estratégica",
        "Liderança inspiradora"
      ]
    }
  ];

  return (
    <section id="treinamentos" className="py-24 bg-nhidra-bg/80 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos <span className="nhidra-gradient-text animate-gradient">Treinamentos</span></h2>
          <div className="h-1 w-20 nhidra-gradient-btn rounded-full mx-auto"></div>
          <p className="mt-6 text-xl max-w-3xl mx-auto text-nhidra-text/80">
            Programas intensivos focados em resultados reais e mensuráveis para sua operação
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 section-fade-in">
          {trainings.map((training, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-nhidra-bg/50 to-nhidra-bg border border-nhidra-purple/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-nhidra-purple/50 hover:transform hover:scale-[1.02] group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="bg-nhidra-purple/10 w-20 h-20 flex items-center justify-center rounded-full mb-6 group-hover:bg-nhidra-purple/20 transition-all duration-300">
                  <div className="text-nhidra-purpleLight">{training.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{training.title}</h3>
                <p className="text-nhidra-text/80 mb-6">{training.description}</p>
                
                <ul className="space-y-3">
                  {training.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-nhidra-purpleLight mr-3">•</span>
                      <span className="text-nhidra-text/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingsSection;
