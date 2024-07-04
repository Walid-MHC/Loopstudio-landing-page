/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        alata: ["Alata", 'sans-serif'],
        josefin: [ "Josefin Sans", 'sans-serif'],
      },
    },
    screens: {
      xxs:"375px",
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1350px",
      xxl: "1440px",
    },
  },
  plugins: [],
};
