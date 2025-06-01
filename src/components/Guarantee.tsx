import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="border-2 border-dashed border-green-200 rounded-lg p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-green-600" />
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-medium text-green-800 mb-2">
              Garantia de Satisfação de 7 Dias
            </h3>
            <p className="text-gray-600">
              Se por qualquer motivo você não ficar satisfeita com o conteúdo do eBook, 
              basta enviar um e-mail em até 7 dias após a compra e devolveremos 100% do seu dinheiro. 
              Sem perguntas, sem complicações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;