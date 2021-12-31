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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
