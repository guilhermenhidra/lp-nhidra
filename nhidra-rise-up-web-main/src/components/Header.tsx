
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Treinamentos', href: '#treinamentos' },
    { name: 'NHIDRA Booster', href: '#booster' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-nhidra-bg/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <img 
            src="https://i.postimg.cc/nrV0G7hj/Nhidra-Logo-2-1.png" 
            alt="NHIDRA Logo" 
            className="h-10 md:h-12"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-nhidra-text hover:text-nhidra-purpleLight transition-colors duration-300 text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="nhidra-gradient-btn text-white px-5 py-2 rounded-md font-medium text-sm animate-gradient-flow"
          >
            Diagnóstico Gratuito
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-nhidra-text" />
          ) : (
            <Menu className="h-6 w-6 text-nhidra-text" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-nhidra-bg/95 backdrop-blur-sm shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-nhidra-text hover:text-nhidra-purpleLight transition-colors duration-300 text-base font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contato" 
              className="nhidra-gradient-btn text-white px-5 py-3 rounded-md font-medium text-base flex justify-center animate-gradient-flow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Diagnóstico Gratuito
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
