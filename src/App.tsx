import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

import { LanguageAndThemeProvider } from './components/LanguageAndThemeContext';

function App() {
  return (
    <LanguageAndThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Services />
        <Contact />
        <Footer />
      </div>
    </LanguageAndThemeProvider>
  );
}

export default App;