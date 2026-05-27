/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          card: "hsl(var(--card))",
          "card-foreground": "hsl(var(--card-foreground))",
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
        },
        fontFamily: {
          display: ["'Instrument Serif'", "serif"],
          body: ["'Inter'", "sans-serif"],
        },
        animation: {
          "fade-rise": "fade-rise 0.8s ease-out forwards",
          "fade-rise-delay": "fade-rise 0.8s ease-out 0.2s forwards",
          "fade-rise-delay-2": "fade-rise 0.8s ease-out 0.4s forwards",
          "float": "float 6s ease-in-out infinite",
          "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        },
        keyframes: {
          "fade-rise": {
            from: { opacity: "0", transform: "translateY(24px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
          float: {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" },
          },
          "pulse-glow": {
            "0%, 100%": { opacity: "0.4", filter: "blur(4px)" },
            "50%": { opacity: "0.8", filter: "blur(8px)" },
          },
        },
      },
    },
    plugins: [],
  };