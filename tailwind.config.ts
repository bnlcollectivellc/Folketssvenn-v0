import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: '#E07B54',
          hover: '#C96A45',
          active: '#B85D3A',
          muted: '#F5C4B3',
        },
        secondary: {
          DEFAULT: '#D4A853',
          hover: '#C19643',
          active: '#A98235',
          muted: '#F5E6C4',
        },
        accent: {
          DEFAULT: '#7B9E87',
          hover: '#6A8B75',
          active: '#5A7A65',
          muted: '#D4E4D9',
        },
        // Background
        cream: {
          DEFAULT: '#FFFBF5',
          muted: '#F7F3ED',
        },
        // Text
        charcoal: {
          DEFAULT: '#2C2C2C',
          secondary: '#5A5A5A',
          muted: '#8A8A8A',
        },
        // Borders
        border: {
          DEFAULT: '#E5E0D8',
          strong: '#D4CFC5',
        },
        // Semantic
        success: '#7B9E87',
        error: '#C95454',
        warning: '#D4A853',
        info: '#5A8AC9',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'section-sm': '4rem',
        'section-md': '6rem',
        'section-lg': '8rem',
      },
      maxWidth: {
        'narrow': '680px',
        'base': '1024px',
        'wide': '1280px',
        'full': '1440px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(44, 44, 44, 0.05)',
        'md': '0 4px 6px rgba(44, 44, 44, 0.07), 0 1px 3px rgba(44, 44, 44, 0.05)',
        'lg': '0 10px 15px rgba(44, 44, 44, 0.1), 0 4px 6px rgba(44, 44, 44, 0.05)',
        'xl': '0 20px 25px rgba(44, 44, 44, 0.1), 0 10px 10px rgba(44, 44, 44, 0.04)',
        'button': '0 4px 6px rgba(224, 123, 84, 0.25)',
        'card-hover': '0 10px 15px rgba(44, 44, 44, 0.1)',
        'modal': '0 20px 25px rgba(44, 44, 44, 0.15)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
