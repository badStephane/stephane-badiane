import { useEffect, useRef, useState, ReactNode } from 'react';

type Variant = 'up' | 'left' | 'right' | 'scale';

type RevealProps = {
  children: ReactNode;
  /** Délai d'apparition en ms (utile pour décaler les éléments d'une grille) */
  delay?: number;
  /** Direction/forme de l'entrée : varier casse la monotonie du fade-up unique */
  variant?: Variant;
  className?: string;
};

const HIDDEN: Record<Variant, string> = {
  up: 'opacity-0 translate-y-8',
  left: 'opacity-0 -translate-x-8',
  right: 'opacity-0 translate-x-8',
  scale: 'opacity-0 scale-95',
};

const VISIBLE: Record<Variant, string> = {
  up: 'opacity-100 translate-y-0',
  left: 'opacity-100 translate-x-0',
  right: 'opacity-100 translate-x-0',
  scale: 'opacity-100 scale-100',
};

/**
 * Révèle son contenu quand il entre dans le viewport, avec plusieurs formes
 * d'entrée possibles (variant). N'anime que `transform` et `opacity` → 60fps
 * même sur mobile bas de gamme. Respecte `prefers-reduced-motion`.
 */
const Reveal = ({ children, delay = 0, variant = 'up', className = '' }: RevealProps) => {
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
        visible ? VISIBLE[variant] : HIDDEN[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
