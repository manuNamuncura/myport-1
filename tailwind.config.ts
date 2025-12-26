// tailwind.config.ts - Solo si necesitas configuración específica
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Alan Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  
};

export default config;