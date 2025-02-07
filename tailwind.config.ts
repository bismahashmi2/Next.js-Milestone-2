import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-cyan':'#3cd6d6',
        'light-cream': '#F6FFEE',
        'coral-pink': '#F48882',
        'peach': '#FAD2CC'
      },
    },
  },
  plugins: [],
} satisfies Config;
