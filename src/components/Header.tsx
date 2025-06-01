import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm py-4 px-4 md:px-8 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-pink-400" fill="#FDE5EC" />
          <span className="font-serif text-xl font-medium text-pink-600">Mãe Leve</span>
        </div>
      </div>
    </header>
  );
};

export default Header;