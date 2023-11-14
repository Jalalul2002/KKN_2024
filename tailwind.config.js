/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['"poppins"', "sans-serif"],
        dmSerifDisplay : ['"DM Serif Display"', "serif"],
        darkerGrotesque : ['"Darker Grotesque"', "sans-serif"],
      },
      colors : {
        GreenHerb : "#A6D577",
        IjoRumput : "#85997D",
        darkGreenHerb : "#5D6B58",
        AbuIjo : "#C1C1C3",
        iceGray : "#EBEBEB",
        hoverGray : "#D9D9D9",
      },
      backgroundImage: {
        'gradient-radial' : 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

