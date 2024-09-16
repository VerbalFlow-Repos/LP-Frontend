module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  // daisyUI config (optional - here are the default values)
  
  theme: {
    extend: {
      fontFamily: {
        verbalFlow: ['VerbalFlowFont', 'sans-serif'],
        verbalFlowSub: ['SubheadingFont', 'serif'],
      },
    },
  },
};
