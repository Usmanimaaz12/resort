/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        navy: {
          900: '#0B1221', /* Deep Midnight */
          800: '#162440',
        },
        gold: {
          300: '#E2D5BA', /* Pale Champagne */
          400: '#C6A87C', /* Muted Luxury Gold */
          500: '#A68A5F',
          600: '#8C7325',
        },
        sand: {
          50: '#F9F8F6', /* Crisp Off-white */
          100: '#F2EFEC', /* Light Linen */
          200: '#E8E4DE',
        },
        stone: {
          800: '#2D2D2D',
          500: '#787878'
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slow-spin': 'spin 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  },
  plugins: [],
}