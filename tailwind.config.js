/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: "#FF4A33",
      secondary: "#95CE1A",
      danger: "#FC4B28",
      medium: "#BEBEB9",
      fill: "#F2F1F0",
      light: "#FFFDFD",
    },
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
};
