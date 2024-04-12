/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('src/assets/Feature-Image-Coffee.jpg')",
      }
    },
  },
  plugins: [],
}

