module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  darkMode: 'class',
  daisyui: {
    themes: ["nord", "business"],
    darkTheme: "business",
  },
  theme: {
    extend: {
      fontFamily: {
        verbalFlow: ['VerbalFlowFont', 'sans-serif'],
        verbalFlowSub: ['SubheadingFont', 'serif'],
        asgardFont: ['AsgardFont', 'sans-serif'],
        selanikFont: ['SelanikFont', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
      },
    },
  },
};