import React from 'react';

const Cta: React.FC = () => {
  return (
    <section className="w-full py-16 bg-pink-50">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-pink-800 mb-4">
          Está pronta para transformar sua experiência como mãe?
        </h2>
        
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Junte-se a milhares de mães que já descobriram o caminho para uma maternidade mais leve, 
          equilibrada e feliz com o eBook "Mãe Leve".
        </p>
        
        <a 
          href="#comprar" 
          className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-medium text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          Quero uma maternidade mais leve
        </a>
        
        <p className="text-sm text-gray-500 mt-4">
          Acesso imediato após a compra | Formato PDF | Leitura em qualquer dispositivo
        </p>
      </div>
    </section>
  );
};

export default Cta;