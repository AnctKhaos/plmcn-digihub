/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        plm: {
          green: "#0f5132",
          greenDark: "#073b24",
          greenLight: "#e8f5ee",
          yellow: "#f5c542",
          yellowSoft: "#fff6d6",
          white: "#ffffff"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15,81,50,0.10)"
      }
    }
  },
  plugins: []
};
