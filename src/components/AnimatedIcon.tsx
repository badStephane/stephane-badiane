import { useEffect, useRef, ReactElement } from 'react';

type AnimatedIconProps = {
  /** Icône lucide-react (SVG stroke) à faire "se dessiner" à l'apparition */
  children: ReactElement;
  /** Délai avant le début du tracé, en ms (utile pour décaler une grille) */
  delay?: number;
  /** Classes appliquées au conteneur (ex: micro-interaction au survol du parent) */
  className?: string;
};

/**
 * Fait "se dessiner" une icône SVG stroke-based (lucide-react) quand elle entre
 * dans le viewport : chaque forme (path/circle/line/…) part d'un trait invisible
 * (dashoffset = sa longueur) puis se trace jusqu'à 0. S'appuie sur
 * `getTotalLength()`, supporté nativement sur toutes les formes SVG de base
 * dans les navigateurs modernes. Respecte `prefers-reduced-motion`.
 */
const AnimatedIcon = ({ children, delay = 0, className = '' }: AnimatedIconProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const shapes = el.querySelectorAll<SVGGeometryElement>('path, circle, line, polyline, polygon, rect, ellipse');
    if (shapes.length === 0) return;

    shapes.forEach((shape) => {
      const length = shape.getTotalLength();
      shape.style.strokeDasharray = `${length}`;
      shape.style.strokeDashoffset = `${length}`;
      shape.style.transition = 'stroke-dashoffset 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        window.setTimeout(() => {
          shapes.forEach((shape) => {
            shape.style.strokeDashoffset = '0';
          });
        }, delay);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      {children}
    </span>
  );
};

export default AnimatedIcon;
