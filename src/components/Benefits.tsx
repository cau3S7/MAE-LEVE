import React from 'react';
import { Check, Heart, Coffee, Battery, Smile, BookOpen } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 p-5 rounded-xl hover:bg-pink-50 transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg text-pink-800 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="w-full py-16 bg-beige-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-pink-800 mb-4">
            O que você vai encontrar no eBook "Mãe Leve"
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um guia completo desenvolvido para ajudar você a transformar sua experiência como mãe, 
            trazendo mais equilíbrio e alegria para sua vida.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <BenefitItem 
            icon={<Heart className="w-6 h-6" />}
            title="Autocuidado sem culpa"
            description="Aprenda a priorizar seu bem-estar emocional e físico sem sentir que está negligenciando seus filhos."
          />
          
          <BenefitItem 
            icon={<Coffee className="w-6 h-6" />}
            title="Rotinas simplificadas"
            description="Estratégias práticas para organizar o dia a dia e reduzir o estresse com tarefas domésticas."
          />
          
          <BenefitItem 
            icon={<Battery className="w-6 h-6" />}
            title="Recupere sua energia"
            description="Dicas e técnicas para recuperar sua vitalidade mesmo com a rotina intensa da maternidade."
          />
          
          <BenefitItem 
            icon={<Smile className="w-6 h-6" />}
            title="Menos cobranças, mais alegria"
            description="Como abandonar o perfeccionismo e encontrar mais momentos de genuína felicidade com seus filhos."
          />
          
          <BenefitItem 
            icon={<Check className="w-6 h-6" />}
            title="Limites saudáveis"
            description="Aprenda a estabelecer limites com clareza e amor, criando um ambiente familiar mais harmonioso."
          />
          
          <BenefitItem 
            icon={<BookOpen className="w-6 h-6" />}
            title="Exemplos reais e aplicáveis"
            description="Histórias de mães reais que transformaram sua maternidade usando as técnicas do livro."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;