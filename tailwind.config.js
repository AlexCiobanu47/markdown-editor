/** @type {import('tailwindcss').Config} */
import vitePluginRequire from "vite-plugin-require";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [vitePluginRequire(), require("@tailwindcss/typography")],
};
