import { useEffect, useRef, ReactElement } from 'react';

type AnimatedIconProps = {
  /** Icône lucide-react (SVG stroke) à faire "se dessiner" à l'apparition */
  children: ReactElement;
  /** Délai avant le début du tracé, en ms (utile pour décaler une grille) */
  delay?: number;
  /** Classes appliquées au conteneur (ex: micro-interaction au survol du parent) */
  className?: string;
};

/** Durée du tracé du contour, en ms */
const OUTLINE_DURATION = 700;
/** Décalage entre deux pastilles qui "se posent" l'une après l'autre, en ms */
const DOT_STAGGER = 90;

/**
 * Fait "se dessiner" une icône SVG stroke-based (lucide-react) quand elle entre
 * dans le viewport. Deux types de formes sont traités différemment :
 *  - les contours (path/line/rect/…) se tracent via `getTotalLength()`,
 *    supporté nativement sur toutes les formes SVG de base dans les
 *    navigateurs modernes ;
 *  - les pastilles pleines (`fill="currentColor"`, ex : les points de couleur
 *    de l'icône Palette) sont trop petites pour qu'un tracé de contour se
 *    voie : elles "se posent" une à une (scale + fondu) une fois le contour
 *    terminé, plutôt que de se dessiner en même temps que lui.
 * Respecte `prefers-reduced-motion`.
 */
const AnimatedIcon = ({ children, delay = 0, className = '' }: AnimatedIconProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const shapes = el.querySelectorAll<SVGGeometryElement>('path, circle, line, polyline, polygon, rect, ellipse');
    if (shapes.length === 0) return;

    const outlines: SVGGeometryElement[] = [];
    const dots: SVGGeometryElement[] = [];
    shapes.forEach((shape) => {
      (shape.getAttribute('fill') === 'currentColor' ? dots : outlines).push(shape);
    });

    outlines.forEach((shape) => {
      const length = shape.getTotalLength();
      shape.style.strokeDasharray = `${length}`;
      shape.style.strokeDashoffset = `${length}`;
      shape.style.transition = `stroke-dashoffset ${OUTLINE_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`;
    });

    dots.forEach((shape) => {
      shape.style.transformBox = 'fill-box';
      shape.style.transformOrigin = 'center';
      shape.style.transform = 'scale(0)';
      shape.style.opacity = '0';
      shape.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease-out';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        window.setTimeout(() => {
          outlines.forEach((shape) => {
            shape.style.strokeDashoffset = '0';
          });
          // Les pastilles se posent une à une, une fois le contour tracé.
          dots.forEach((shape, i) => {
            window.setTimeout(() => {
              shape.style.transform = 'scale(1)';
              shape.style.opacity = '1';
            }, (outlines.length ? OUTLINE_DURATION : 0) + i * DOT_STAGGER);
          });
        }, delay);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    // Filet de sécurité : si l'observer ne se déclenche jamais (webview
    // atypique), l'icône reste terminée à l'état statique final plutôt que
    // bloquée invisible/non tracée indéfiniment.
    const fallback = window.setTimeout(() => {
      outlines.forEach((shape) => {
        shape.style.transition = 'none';
        shape.style.strokeDashoffset = '0';
      });
      dots.forEach((shape) => {
        shape.style.transition = 'none';
        shape.style.transform = 'scale(1)';
        shape.style.opacity = '1';
      });
    }, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      {children}
    </span>
  );
};

export default AnimatedIcon;
