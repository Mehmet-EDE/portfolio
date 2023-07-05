/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        edeColor: "#191926"
      },
      screens: {
        rsm: { "max": "639px" },
        rmd:{"max":"767px"},
        rlg:{"max":"1270px"},
      }
    },
  },
  plugins: [],
}
