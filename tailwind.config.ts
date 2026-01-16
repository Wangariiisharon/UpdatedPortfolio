/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'terminal-radial': 'radial-gradient(circle at center, #002b00 0%, #000000 100%)',
      },
      fontFamily: {
        terminal: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
