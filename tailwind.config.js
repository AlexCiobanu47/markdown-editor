/** @type {import('tailwindcss').Config} */
import vitePluginRequire from "vite-plugin-require";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#15161a",
        lighterDarkGray: "#1e1f23",
        lightGray: "#2c2d31",
        orangeAccent: "#e66643",
        lighterGray: "#b0b1b3",
      },
    },
  },
  plugins: [vitePluginRequire(), require("@tailwindcss/typography")],
};
