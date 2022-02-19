module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Juana\\ Black', 'Georgia'],
      'sans': ['Basier\\ Circle']
    },
    extend: {
      keyframes: {
        'slide': {
          '0%': { transform: 'translateX(0)' },
          '100%' : { transform: 'translateX(-6200px)' }
      }
    },
      animation: {
        'slide': 'slide 60s infinite linear'
      }
    },
    
  },
  plugins: [],
};
