module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line to your project's structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  daisyui: {
    themes: ["light"],
  },
};
