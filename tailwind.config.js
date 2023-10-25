/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue-intro": "hsl(217, 28%, 15%)",
        "dark-blue-main": "hsl(218, 28%, 13%)",
        "dark-blue-footer": "hsl(216, 53%, 9%)",
        "dark-blue-testimonials": "hsl(219, 30%, 18%)",
        "blue-attribution": "hsl(228, 45%, 44%)",
        "cyan": "hsl(176, 68%, 64%)",
        "blue": "hsl(198, 60%, 50%)",
        "light-red-error": "hsl(0, 100%, 63%)",
        "white": "hsl(0, 0%, 100%)",
      },
      backgroundImage: (theme) => ({
        "image-curvy-mobile": "url('./assets/bg-curvy-mobile.svg'), linear-gradient( to bottom, hsl(217, 28%, 15%), hsl(217, 28%, 15%), hsl(218, 28%, 13%), hsl(218, 28%, 13%))",
        "image-curvy-desktop": "url('./assets/bg-curvy-desktop.svg'), linear-gradient( to bottom, hsl(217, 28%, 15%), hsl(217, 28%, 15%))",
        "cyan-blue": "linear-gradient(90deg, hsla(176, 68%, 64%, 1) 0%, hsla(198, 60%, 50%, 1) 100%)",
        "double-quotes": "url('./assets/bg-quotes.png')"
       }),
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"]
      },
      content: {
        doublequotes: "url('./assets/bg-quotes.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
      xlg: "1710px"
    },
  },
  plugins: [],
}

