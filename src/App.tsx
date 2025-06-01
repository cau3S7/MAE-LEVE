import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonial from './components/Testimonial';
import Cta from './components/Cta';
import Promotion from './components/Promotion';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set the document title
    document.title = "Mãe Leve | eBook para uma maternidade equilibrada";
    
    // Get the default title element and update it if it exists
    const defaultTitleElement = document.querySelector('[data-default]');
    if (defaultTitleElement) {
      defaultTitleElement.textContent = "Mãe Leve | eBook para uma maternidade equilibrada";
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonial />
        <Cta />
        <Promotion />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
}

export default App;