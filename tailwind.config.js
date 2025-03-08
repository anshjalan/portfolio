/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-mono': ['SF Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        'calibre': ['Calibre', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        normal: '100',
        bold: '700',
      },
      colors: {
        customTeal: '#64FFDA',
        customDarkBlue: '#0A192F',
        customLightBlue: '#CCD6F6',
        customGray: '#8892B0',
        customBlue2:'#172A45',
      },
    },
  },
  plugins: [],
}
