/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { sm: "100%", md: "100%", lg: "100%", xl: "1200px" },
    },
    extend: {
      fontFamily: {
        primary: ["Georgia", "sans-serif"],
        paragraph: ["Poppins", "sans-serif"],
      },

      colors: {
        background: "var(--background)",
        text: "var(--text)",
        accent: "var(--accent)",
        button: "var(--button)",
        buttonText: "var(--button-text)",
        lightText: "var(--light_text)",
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
      },
      spacing: {
        1: "var(--spacing-1)",
        2: "var(--spacing-2)",
        3: "var(--spacing-3)",
        4: "var(--spacing-4)",
        5: "var(--spacing-5)",
        6: "var(--spacing-6)",
        8: "var(--spacing-8)",
        10: "var(--spacing-10)",
        12: "var(--spacing-12)",
      },
    },
  },
  plugins: [],
};
