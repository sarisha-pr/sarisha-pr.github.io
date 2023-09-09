/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "390px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },

    fontFamily: {},

    extend: {
      colors: {},
    },
  },

  corePlugins: {
    container: false,
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          paddingLeft: "15px",
          paddingRight: "15px",
          marginLeft: "auto",
          marginRight: "auto",

          "@screen sm": {
            maxWidth: "540px",
            paddingLeft: "0",
            paddingRight: "0",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen xxl": {
            maxWidth: "1320px",
          },
        },
      });
    },
  ],
};
