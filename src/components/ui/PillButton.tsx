import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Tone = 'primary' | 'outline';

const TONE_CLASS: Record<Tone, string> = {
  primary: 'bg-primary text-ink hover:bg-primary/90',
  outline: 'border-2 border-accent bg-secondary text-accent hover:bg-ink',
};

const BASE_CLASS =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-medium transition-all duration-240 ease-out-expo hover:scale-105 active:scale-95';

type PillButtonBaseProps = {
  children: ReactNode;
  tone?: Tone;
  className?: string;
};

type PillButtonAsAnchor = PillButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type PillButtonAsButton = PillButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type PillButtonProps = PillButtonAsAnchor | PillButtonAsButton;

/** Bouton pilule (fond plein, coins totalement arrondis) — rend un <a> si `href` est fourni, sinon un <button>. */
const PillButton = ({ children, tone = 'primary', className = '', ...rest }: PillButtonProps) => {
  const classes = `${BASE_CLASS} ${TONE_CLASS[tone]} ${className}`;

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
};

export default PillButton;
