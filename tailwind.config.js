/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-gray': "hsl(0, 0%, 55%)",
        'very-dark-gray': "hsl(0, 0%, 41%)",
      },
    },
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px", 
      lg: "992px", 
      xl: "1200px", 
      xxl: "1440px", 
    },
  },
  plugins: [],
};
