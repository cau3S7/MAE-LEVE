import React from 'react';
import { ArrowRight } from 'lucide-react';

const Promotion: React.FC = () => {
  return (
    <section id="comprar" className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-pink-100 to-green-50 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200 rounded-full opacity-20 transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-20 transform -translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-pink-800 mb-6 text-center">
              Oferta Especial por Tempo Limitado
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="bg-white rounded-xl p-5 text-center shadow-md transform rotate-2">
                <p className="text-gray-500 line-through mb-1">R$19,90</p>
                <p className="text-3xl md:text-4xl font-bold text-pink-600">R$10,00</p>
                <p className="text-xs text-gray-500 mt-1">Pagamento único</p>
              </div>
              
              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-pink-400" />
              </div>
              
              <div className="bg-white rounded-xl p-5 text-center shadow-md max-w-xs">
                <h3 className="font-medium text-pink-800 mb-2">O que você recebe:</h3>
                <ul className="text-left text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>eBook completo com 30 páginas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Acesso imediato após a compra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>7 dias de garantia de satisfação</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="https://pay.kirvano.com/10f37e88-f496-4280-ad4d-0b39992fef45" 
                className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sim! Quero meu eBook agora
              </a>
              <p className="text-sm text-gray-600 mt-3">
                Pagamento seguro via PIX, cartão de crédito ou boleto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;