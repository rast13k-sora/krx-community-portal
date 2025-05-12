
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#22A699", // Бирюзово-зеленый основной
          foreground: "hsl(var(--primary-foreground))",
          50: "#E6F6F4",
          100: "#CCEEE9",
          200: "#99DCD3",
          300: "#66CBBD",
          400: "#33B9A7",
          500: "#22A699", // Основной
          600: "#1B847A",
          700: "#15635C",
          800: "#0E423D",
          900: "#07211F",
        },
        secondary: {
          DEFAULT: "#0D1E40", // Темно-синий
          foreground: "hsl(var(--secondary-foreground))",
          50: "#E6EAF2",
          100: "#CDD5E5",
          200: "#9BAACA",
          300: "#6980B0",
          400: "#375595",
          500: "#0D1E40", // Основной
          600: "#0A1833",
          700: "#081226",
          800: "#050C1A",
          900: "#03060D",
        },
        accent: {
          DEFAULT: "#F27935", // Оранжевый акцент
          foreground: "hsl(var(--accent-foreground))",
          50: "#FEF2E9",
          100: "#FCE5D3",
          200: "#F9CBA7",
          300: "#F6B17B",
          400: "#F3974F",
          500: "#F27935", // Основной
          600: "#C2612A",
          700: "#914920",
          800: "#613015",
          900: "#30180B",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", ...fontFamily.sans],
        rubik: ["Rubik", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
