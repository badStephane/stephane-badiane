/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#F5F5F5',
        'hero-from': '#5B84B5',
        'hero-to': '#2E4A70',
        accent: '#F2571C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['clamp(2.75rem, 7vw, 6.25rem)', { lineHeight: '1', fontWeight: '600' }],
        h2: ['clamp(2rem, 5vw, 3.75rem)', { lineHeight: '1.02', fontWeight: '600' }],
        h4: ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.1', fontWeight: '600' }],
        h5: ['1.25rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-quart': 'cubic-bezier(0.7, 0, 0.84, 0)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
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
