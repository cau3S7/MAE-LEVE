import React from 'react';
import { Star } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="w-full py-16 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-pink-800 mb-4">
            O que as mães estão dizendo
          </h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400" fill="#FBBF24" />
            ))}
          </div>
          
          <div className="relative pt-6">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-5xl text-pink-200 opacity-50">
              "
            </div>
            <p className="text-gray-700 text-lg italic text-center">
              Antes de ler o eBook "Mãe Leve", eu me sentia constantemente esgotada e culpada por não conseguir dar conta de tudo. 
              As dicas e reflexões me ajudaram a reorganizar minhas prioridades e hoje consigo aproveitar muito mais 
              meus momentos com meus filhos, sem me sentir sobrecarregada. Foi uma verdadeira transformação na nossa família!
            </p>
            <div className="absolute -bottom-8 right-0 text-5xl text-pink-200 opacity-50">
              "
            </div>
          </div>
          
          <div className="mt-8 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
              <img 
                src="https://images.pexels.com/photos/3681591/pexels-photo-3681591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Foto de Carolina Mendes" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-medium text-pink-800">Carolina Mendes</p>
            <p className="text-sm text-gray-500">Mãe de 2 filhos, Rio de Janeiro</p>
          </div>
          
          <div className="absolute -top-3 -left-3 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/5257481/pexels-photo-5257481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Filho de Carolina" 
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-pink-100 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;