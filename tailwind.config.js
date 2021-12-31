module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ["'Inter'", 'ui-sans-serif', 'system-ui'],
      'serif': ["'Inter'", 'ui-serif', 'Georgia'],
    },
    extend: {
      colors: {
        first: '#00a9b2',
        second: '#fab537',
        third: '#ac3c3a',
        fourth: '#b24492',
        fifth: '#8063a8',
        sixth: '#826b48',
        blackLogo: '#4a4a49',
        greyLogo: '#666666',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
