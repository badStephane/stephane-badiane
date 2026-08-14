import { useEffect, useRef, ReactElement } from 'react';

type Motion = 'draw' | 'spin' | 'nudge-x' | 'nudge-y' | 'flash';

type AnimatedIconProps = {
  /** Icône lucide-react (SVG stroke) à animer */
  children: ReactElement;
  /** Délai avant le premier passage, en ms (utile pour décaler une grille) */
  delay?: number;
  /** Classes appliquées au conteneur (ex: micro-interaction au survol du parent) */
  className?: string;
  /**
   * Type de mouvement, choisi selon ce que représente l'icône :
   *  - 'draw' (défaut) : le contour se trace (pastilles pleines type
   *    Palette : voir plus bas) — pour les icônes "objet/outil".
   *  - 'spin' : rotation continue — pour un globe.
   *  - 'nudge-x' / 'nudge-y' : léger va-et-vient directionnel — pour
   *    une flèche qui pointe horizontalement/verticalement.
   *  - 'flash' : pulsation scale + luminosité — pour un éclair, une
   *    étoile, un cœur : tout ce qui "scintille" plutôt que se dessine.
   */
  motion?: Motion;
  /** Anime en boucle continue tant que visible (défaut true). À couper
   *  pour une icône de contrôle (ex: bascule menu) plutôt que décorative. */
  loop?: boolean;
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

const CSS_MOTION: Record<Exclude<Motion, 'draw'>, { name: string; duration: string; timing: string }> = {
  spin: { name: 'icon-spin', duration: '5s', timing: 'linear' },
  'nudge-x': { name: 'icon-nudge-x', duration: '1.6s', timing: 'ease-in-out' },
  'nudge-y': { name: 'icon-nudge-y', duration: '1.6s', timing: 'ease-in-out' },
  flash: { name: 'icon-flash', duration: '1.8s', timing: 'ease-in-out' },
};

/**
 * Anime une icône lucide-react quand elle entre dans le viewport, avec un
 * motif adapté à ce qu'elle représente (voir `motion`). Se met en pause hors
 * du viewport (perf/batterie) et reprend au retour. Respecte
 * `prefers-reduced-motion`.
 */
const AnimatedIcon = ({ children, delay = 0, className = '', motion = 'draw', loop = true }: AnimatedIconProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasIO = typeof IntersectionObserver !== 'undefined';

    // --- Motifs CSS simples (rotation, nudge, flash) : une seule animation
    // posée sur le conteneur, mise en pause/reprise selon la visibilité. ---
    if (motion !== 'draw') {
      if (reduced) return;
      const { name, duration, timing } = CSS_MOTION[motion];
      el.style.animation = `${name} ${duration} ${timing} ${loop ? 'infinite' : '1'}`;
      el.style.animationPlayState = 'paused';
      el.style.animationDelay = `${delay}ms`;

      if (!hasIO) {
        el.style.animationPlayState = 'running';
        return;
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          el.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }

    // --- Motif 'draw' : tracé du contour + pastilles pleines qui se posent ---
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

    if (reduced || !hasIO) {
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
      if (!loop) return;
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
        } else if (loop) {
          // Hors champ : on suspend la boucle (perf). Sans boucle (loop=false),
          // une fois tracée, l'icône reste dans son état final.
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
  }, [delay, motion, loop]);

  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      {children}
    </span>
  );
};

export default AnimatedIcon;
