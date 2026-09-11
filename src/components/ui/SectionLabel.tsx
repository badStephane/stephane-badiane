type Tone = 'light' | 'dark';

const TONE_CLASS: Record<Tone, string> = {
  light: 'text-ink/40',
  dark: 'text-white/50',
};

type SectionLabelProps = {
  children: string;
  tone?: Tone;
  className?: string;
};

/** Petit label entre crochets façon "{WHO WE ARE}", utilisé au-dessus des titres de section. */
const SectionLabel = ({ children, tone = 'dark', className = '' }: SectionLabelProps) => (
  <p className={`font-display text-h5 uppercase tracking-wide ${TONE_CLASS[tone]} ${className}`}>
    {`{${children}}`}
  </p>
);

export default SectionLabel;
