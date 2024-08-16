/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  mode: "jit",
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...fontFamily.sans],
      },
      colors: {
        primary: {
          400: "#00E0F3",
          500: "#00c4fd",
        },
        dark: "#333333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [import("@tailwindcss/forms")],
};
