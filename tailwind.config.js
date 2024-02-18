/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        esp: "1350px",
        "3xl": "1700px",
      },
    },
  },
  plugins: [],
};
