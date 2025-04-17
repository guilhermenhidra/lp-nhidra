
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-nhidra-bg/90 border-t border-nhidra-purple/20">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div>
            <img 
              src="https://i.postimg.cc/nrV0G7hj/Nhidra-Logo-2-1.png" 
              alt="NHIDRA Logo" 
              className="h-12 mb-6"
            />
            <p className="text-nhidra-text/70 mb-6">
              Formando os maiores vendedores, líderes e gestores do Brasil através de treinamentos intensivos e práticos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-nhidra-text/70 hover:text-nhidra-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-nhidra-text/70 hover:text-nhidra-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-nhidra-text/70 hover:text-nhidra-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {['Início', 'Sobre', 'Treinamentos', 'NHIDRA Booster', 'Contato'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item === 'Início' ? 'hero' : item.toLowerCase()}`} 
                    className="text-nhidra-text/70 hover:text-nhidra-purple transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-nhidra-purple mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-nhidra-text/70">(00) 0000-0000</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-nhidra-purple mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-nhidra-text/70">contato@nhidra.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-nhidra-purple mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-nhidra-text/70">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-nhidra-text/70 mb-4">
              Receba conteúdo exclusivo e dicas de vendas e gestão.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-nhidra-bg/50 border border-nhidra-purple/30 rounded-lg px-4 py-3 text-nhidra-text/90 focus:outline-none focus:border-nhidra-purple/60"
              />
              <button 
                type="submit"
                className="nhidra-gradient-btn text-white py-3 px-6 rounded-lg font-medium"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-nhidra-purple/20 mt-12 pt-8 text-center">
          <p className="text-nhidra-text/60 text-sm">
            © {currentYear} NHIDRA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
