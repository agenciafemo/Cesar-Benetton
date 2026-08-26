import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "url('/banner.png')",
      },
      colors: {
        pink: "#ff00f5",
        purple: "#5c10ff",
        green: "#1aefa2",
        gray: "#333333",
        white: "#ffffff",
        red: "#ff003d",
        orange: "#FF7A00",
        "blue-light": "#335686",
        "blue-muted": "#6E90AD",
        "gray-dark": "#01060c",
        "gray-darker": "#021533",
        "blue-dark": "#021533",
        "gray-light": "#E3E6E0",
        "green-dark": " #00963d",
        "green-light": " #00d757"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#335686",
            foreground: "white",
          },
          secondary: {
            DEFAULT: '#021533',
            foreground: 'white',
          },

        }
      },
    }
  })],
}
