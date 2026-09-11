import { MouseEvent } from 'react';

type SpacedNavLinkProps = {
  label: string;
  index: number;
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
  href: string;
};

/** Nombre de chiffres utilisé pour l'index de nav (ex: 01, 02…) */
const NAV_INDEX_DIGITS = 2;

/** Lien de nav "H o m e" (lettres espacées) avec numéro en exposant façon Operator.X. */
const SpacedNavLink = ({ label, index, onClick, href }: SpacedNavLinkProps) => {
  const displayIndex = String(index).padStart(NAV_INDEX_DIGITS, '0');

  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-flex items-baseline gap-1 font-body text-sm font-semibold text-white/70 transition-colors duration-240 hover:text-white"
    >
      <span className="align-super text-[0.6rem] text-accent">{displayIndex}</span>
      <span className="flex">
        {label.split('').map((char, i) => (
          <span key={i} className="tracking-[0.15em] group-hover:tracking-[0.2em] transition-all duration-240">
            {char === ' ' ? ' ' : char}
          </span>
        ))}
      </span>
    </a>
  );
};

export default SpacedNavLink;
