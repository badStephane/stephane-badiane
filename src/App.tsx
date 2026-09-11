import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
