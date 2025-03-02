/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 15s infinite ease-in-out',
        'float-delay-3': 'float 15s infinite 3s ease-in-out',
        'float-delay-6': 'float 15s infinite 6s ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out 0.3s forwards',
        'slide-up-delay-2': 'slideUp 0.6s ease-out 0.5s forwards',
        'slide-up-delay-3': 'slideUp 0.6s ease-out 0.7s forwards',
        'fade-in-delay-15': 'fadeIn 0.6s ease-out 1.5s forwards',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
    },
  },
  plugins: [],
}