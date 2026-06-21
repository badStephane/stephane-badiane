/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        // Entrée (apparition) : départ rapide, atterrissage doux → réactif
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        // Sortie (disparition) : départ doux, fin rapide → s'efface
        'in-quart': 'cubic-bezier(0.7, 0, 0.84, 0)',
        // Changement d'état (morph) : équilibré (Material standard)
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '160': '160ms',
        '240': '240ms',
        '320': '320ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
