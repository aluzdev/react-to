/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
