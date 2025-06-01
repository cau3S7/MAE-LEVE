import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-pink-400" fill="#FDE5EC" />
            <span className="font-serif text-lg font-medium text-pink-600">Mãe Leve</span>
          </div>
          
          <p className="text-gray-600 italic max-w-md mx-auto">
            "Para a mãe que cuida de todos, agora é sua vez."
          </p>
        </div>
        
        <div className="border-t border-pink-100 pt-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Mãe Leve. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;