import { useEffect, useRef, useState, ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Délai d'apparition en ms (utile pour décaler les éléments d'une grille) */
  delay?: number;
  className?: string;
};

/**
 * Révèle son contenu (fondu + léger glissement vers le haut) quand il entre
 * dans le viewport. N'anime que `transform` et `opacity` → 60fps même sur
 * mobile bas de gamme. Respecte `prefers-reduced-motion`.
 */
const Reveal = ({ children, delay = 0, className = '' }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mouvement réduit demandé → on affiche directement, sans animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out-expo ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
