import { useEffect, useRef, ReactElement } from 'react';

type AnimatedIconProps = {
  /** Icône lucide-react (SVG stroke) à faire "se dessiner" en boucle */
  children: ReactElement;
  /** Délai avant le premier tracé, en ms (utile pour décaler une grille) */
  delay?: number;
  /** Classes appliquées au conteneur (ex: micro-interaction au survol du parent) */
  className?: string;
};

/** Durée du tracé du contour, en ms */
const DRAW_MS = 700;
/** Décalage entre deux pastilles qui "se posent" l'une après l'autre, en ms */
const DOT_STAGGER_MS = 90;
/** Temps d'affichage plein avant de recommencer, en ms */
const HOLD_MS = 1400;
/** Durée pour "effacer" le tracé avant de le relancer, en ms */
const UNDRAW_MS = 450;
/** Pause à l'état effacé avant de redessiner, en ms */
const GAP_MS = 250;

/**
 * Fait "se dessiner" une icône SVG stroke-based (lucide-react) en boucle
 * continue tant qu'elle est visible à l'écran. Deux types de formes sont
 * traités différemment :
 *  - les contours (path/line/rect/…) se tracent via `getTotalLength()`,
 *    supporté nativement sur toutes les formes SVG de base dans les
 *    navigateurs modernes ;
 *  - les pastilles pleines (`fill="currentColor"`, ex : les points de couleur
 *    de l'icône Palette) sont trop petites pour qu'un tracé de contour se
 *    voie : elles "se posent" une à une (scale + fondu) une fois le contour
 *    terminé, plutôt que de se dessiner en même temps que lui.
 * La boucle se met en pause quand l'icône sort du viewport (perf/batterie)
 * et reprend à son retour. Respecte `prefers-reduced-motion`.
 */
const AnimatedIcon = ({ children, delay = 0, className = '' }: AnimatedIconProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const shapes = el.querySelectorAll<SVGGeometryElement>('path, circle, line, polyline, polygon, rect, ellipse');
    if (shapes.length === 0) return;

    const outlines: SVGGeometryElement[] = [];
    const dots: SVGGeometryElement[] = [];
    shapes.forEach((shape) => {
      (shape.getAttribute('fill') === 'currentColor' ? dots : outlines).push(shape);
    });
    const lengths = outlines.map((shape) => shape.getTotalLength());

    // Repli statique : icône affichée normalement, sans animation.
    const showStatic = () => {
      outlines.forEach((shape) => {
        shape.style.transition = 'none';
        shape.style.strokeDasharray = '';
        shape.style.strokeDashoffset = '';
      });
      dots.forEach((shape) => {
        shape.style.transition = 'none';
        shape.style.transform = '';
        shape.style.opacity = '';
      });
    };

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      showStatic();
      return;
    }

    outlines.forEach((shape, i) => {
      shape.style.strokeDasharray = `${lengths[i]}`;
      shape.style.strokeDashoffset = `${lengths[i]}`;
    });
    dots.forEach((shape) => {
      shape.style.transformBox = 'fill-box';
      shape.style.transformOrigin = 'center';
      shape.style.transform = 'scale(0)';
      shape.style.opacity = '0';
    });

    const timers: number[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms));
    };
    const clearTimers = () => {
      timers.forEach((id) => window.clearTimeout(id));
      timers.length = 0;
    };

    const drawIn = () => {
      outlines.forEach((shape) => {
        shape.style.transition = `stroke-dashoffset ${DRAW_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`;
        shape.style.strokeDashoffset = '0';
      });
      dots.forEach((shape, i) => {
        schedule(() => {
          shape.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease-out';
          shape.style.transform = 'scale(1)';
          shape.style.opacity = '1';
        }, (outlines.length ? DRAW_MS : 0) + i * DOT_STAGGER_MS);
      });
      const total = (outlines.length ? DRAW_MS : 0) + dots.length * DOT_STAGGER_MS;
      schedule(undraw, total + HOLD_MS);
    };

    const undraw = () => {
      outlines.forEach((shape, i) => {
        shape.style.transition = `stroke-dashoffset ${UNDRAW_MS}ms cubic-bezier(0.7, 0, 0.84, 0)`;
        shape.style.strokeDashoffset = `${lengths[i]}`;
      });
      dots.forEach((shape) => {
        shape.style.transition = `transform ${UNDRAW_MS}ms cubic-bezier(0.7, 0, 0.84, 0), opacity 0.2s ease-in`;
        shape.style.transform = 'scale(0)';
        shape.style.opacity = '0';
      });
      schedule(drawIn, UNDRAW_MS + GAP_MS);
    };

    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!started) {
            started = true;
            schedule(drawIn, delay);
          }
        } else {
          // Hors champ : on suspend la boucle (perf), l'icône reste dans son
          // état courant et reprendra au prochain redraw plutôt qu'à la
          // reprise exacte du cycle précédent.
          clearTimers();
          started = false;
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    // Filet de sécurité : si l'observer ne se déclenche jamais (webview
    // atypique), on affiche l'icône normalement plutôt que de la laisser
    // bloquée invisible/mi-tracée indéfiniment.
    const safety = window.setTimeout(() => {
      if (!started) {
        observer.disconnect();
        clearTimers();
        showStatic();
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimers();
      window.clearTimeout(safety);
    };
  }, [delay]);

  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      {children}
    </span>
  );
};

export default AnimatedIcon;
