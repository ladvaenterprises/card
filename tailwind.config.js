/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/main.tsx",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A111D', // Ultra Dark Navy
          900: '#101B2D', // Midnight Navy (Primary Background)
          850: '#132137', // Intermediate Navy
          800: '#172943', // Deep Navy (Cards & Elevated surfaces)
          700: '#1E3557', // Accent Navy
          600: '#2A466F', // Border / subtle highlight
        },
        gold: {
          300: '#EBD8B8', // Pale Gold
          400: '#DFCEAA', // Light Champagne
          500: '#C9A96E', // Champagne Gold (Primary Brand Accent)
          600: '#B89355', // Deep Antique Gold
          700: '#947239', // Dark Burnished Gold
        },
        ivory: {
          50: '#FCFBF9',  // Lightest Ivory
          100: '#F7F4ED', // Warm Ivory (Content Background)
          200: '#EFECE3', // Warm Grey-Ivory
          300: '#E0DDD2', // Subtle Ivory Border
        },
        muted: {
          100: '#EDF1F7',
          200: '#D5DDE8',
          300: '#B4BFD0',
          400: '#9AA5B5', // Muted Grey
          500: '#7E8A9C',
          600: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Playfair Display', 'DM Sans', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(201, 169, 110, 0.25)',
        'gold-glow-lg': '0 0 45px -5px rgba(201, 169, 110, 0.35)',
        'navy-elevated': '0 20px 40px -15px rgba(10, 17, 29, 0.7)',
        'executive': '0 25px 50px -12px rgba(16, 27, 45, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'navy-mesh': 'radial-gradient(circle at 10% 20%, rgba(201, 169, 110, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(30, 53, 87, 0.5) 0%, transparent 50%)',
        'gold-gradient': 'linear-gradient(135deg, #DFCEAA 0%, #C9A96E 50%, #B89355 100%)',
        'gold-sheen': 'linear-gradient(90deg, transparent, rgba(201, 169, 110, 0.25), transparent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
