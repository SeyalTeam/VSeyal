import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-primary selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
