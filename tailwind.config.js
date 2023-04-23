/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#EDEDED",
        subHeading: "#818994",
        blue: {
          DEFAULT: "#18a0d7",
          500: "#e7f5fb",
        },
        red: {
          DEFAULT: "#e66c6c",
          500: "#fbebeb",
        },
        indigo: {
          800: "#314456",
          500: "#9baaba",
          DEFAULT: "#2A3F54",
        },
        gray: {
          DEFAULT: "#c7c7c7",
          500: "#e5e5e5",
          400: "#ebebeb",
        },
        "main-gradient": {
          DEFAULT:
            "-webkit-linear-gradient(55deg, rgba(143,195,30,1) 50%, rgba(20,159,213,1) 100%)",
        },
      },
    },
    fontFamily: {
      montserrat: "Montserrat",
    },
  },
  plugins: [],
};
