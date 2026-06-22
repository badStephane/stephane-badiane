import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';

import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
    <div style={{fontFamily: "'Syne', system-ui, -apple-system, sans-serif"}}>
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <div className='flex flex-col w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'>
          <About />
          {/* <hr className='w-full border-blue-500' /> */}
          <Skills />
          <Projects />
          <Services />
          {/* <hr className='w-full border-blue-500' /> */}
          <Contact />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
    </div>
  );
}

export default App;