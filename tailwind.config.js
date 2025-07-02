/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#EAFDFD',
          100: '#C5F7F7',
          200: '#8BEEEE',
          300: '#4DE3E3',
          400: '#1CD5D5',
          500: '#148B8B',
          600: '#0F6E6E',
          700: '#0C5757',
          800: '#094040',
          900: '#062929',
        },
        emerald: {
          50: '#E6FAF0',
          100: '#CCF2E0',
          200: '#99E5C1',
          300: '#66D8A2',
          400: '#33CB83',
          500: '#1A5D2B',
          600: '#155624',
          700: '#0F401B',
          800: '#0A2912',
          900: '#051309',
        },
        mint: {
          50: '#EAFDFD',
          100: '#D5FAFA',
          200: '#AAF5F5',
          300: '#80F0F0',
          400: '#55EBEB',
          500: '#2AE6E6',
          600: '#22B8B8',
          700: '#1A8A8A',
          800: '#115C5C',
          900: '#092E2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'progress-bar': 'progress-bar 2s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'spin-slow': 'spin-slow 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'progress-bar': {
          '0%': { width: '0%' },
          '100%': { width: '68%' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};