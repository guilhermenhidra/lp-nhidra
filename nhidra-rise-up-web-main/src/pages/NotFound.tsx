
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-nhidra-bg font-montserrat flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 nhidra-gradient-text animate-gradient">404</h1>
          <p className="text-2xl md:text-3xl text-nhidra-text mb-10">Ops! Página não encontrada</p>
          <a 
            href="/" 
            className="nhidra-gradient-btn text-white py-3 px-8 rounded-lg font-bold inline-flex items-center gap-3 hover:shadow-lg transition-all duration-300"
          >
            <Home className="h-5 w-5" /> Voltar ao início
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
