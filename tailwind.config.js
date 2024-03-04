/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "2560px",
    },
    extend: {
      colors: {
        blueButton: "#3B49DF",
        grayButton: "#3b49df1a",
        gray25: "#404040",
      },
    },
  },
  plugins: [],
};
