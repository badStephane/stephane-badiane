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
    <div style={{fontFamily: 'Syne'}}>
    <LanguageAndThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <div className='flex justify-center items-center flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'>
          <About />
          {/* <hr className='w-full border-blue-500' /> */}
          <Skills />
          {/* <hr className='w-full border-blue-500' /> */}
          {/* <Projects /> */}
          <Services />
          {/* <hr className='w-full border-blue-500' /> */}
          <Contact />
        </div>
        <Footer />
      </div>
    </LanguageAndThemeProvider>
    </div>
  );
}

export default App;