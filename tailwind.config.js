/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px", // mobile
        tablet: "640px", // tablet
        laptop: "1024px", // laptop
        desktop: "1280px", // desktop
      },
    },
  },
  plugins: [],
};
