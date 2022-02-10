module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          gradientLight: '#e942ff',
          gradientHeavy: '#8838ff',
          appBg: '#f5f3f7',
          subHeading: '	#d89eff',
          chatLeft: '#9241c8',
          chatRight: '#6e5d7e',
          placeholder: '#c6cacd',
          submit: '#3e2753',
          radio: '#e570ff',
        },
      },
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
