import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Outfit", "system-ui", "sans-serif"],
      },
      colors: {
        // Bayes Price Brand Colors
        charcoal: "#332E33",
        yellow: "#FFC000",
        pink: "#FCA6DE",
        red: "#FF544F",
        coral: "#FF6B6B",
        blue: "#00B2FF",
        green: "#00B190",

        // Support palette
        "dark-pink": "#FF0A7A",
        "dark-red": "#FF2828",
        "dark-blue": "#001F82",
        "dark-yellow": "#FF9E00",
        "dark-green": "#008651",

        // UI colors
        background: "#ffffff",
        foreground: "#332E33",
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#6b7280",
        },
        border: "#e5e5e5",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
