// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;