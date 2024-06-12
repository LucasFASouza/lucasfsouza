/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      colors: {
        "accent-pink": "#FC3D6B",
        "basic-black": "#1E1E1E",
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ["responsive"],
    },
  },
};
