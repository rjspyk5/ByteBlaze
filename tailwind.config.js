/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: ["sunset", "light"],
  plugins: [require("daisyui")],
};
