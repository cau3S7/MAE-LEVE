import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-pink-800 leading-tight">
              Descubra o caminho para uma <span className="relative">
                maternidade mais leve
                <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200 -z-10 transform -rotate-1"></span>
              </span>
            </h1>
            
            <p className="text-gray-700 text-lg md:text-xl">
              Um guia completo para mães que desejam cuidar de seus filhos com amor, 
              <span className="italic"> sem abrir mão do autocuidado e equilíbrio emocional</span>.
            </p>
            
            <div className="pt-4">
              <a 
                href="#comprar" 
                className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-medium text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Quero uma maternidade mais leve
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3995919/pexels-photo-3995919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mãe e filho em momento de carinho" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-md">
                <p className="text-pink-700 font-medium text-lg">
                  "Para a mãe que você é, e para a que você deseja ser."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;