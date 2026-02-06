/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        "background-dark": "var(--color-background-dark)",
        "background-accent-dark": "var(--color-background-accent-dark)",
        "background-accent-light": "var(--color-background-accent-light)",
        foreground: "var(--color-foreground)",
        "foreground-light": "var(--color-foreground-light)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
    },
  },
};
