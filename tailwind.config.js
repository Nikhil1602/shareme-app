/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        360: "360deg",
        10: "10deg",
        "-10": "-10deg",
      },
      translate: {
        "-20px": "-20px",
        "20px": "20px",
        "-5px": "-5px",
        "-50%": "-50%",
      },
      spacing: {
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
      },
    },
    fontFamily: {
      Poppins: ["Poppins"],
    },
    grayscale: {
      50: ".5",
    },
    transitionProperty: {
      width: "width",
    },
  },
  plugins: [],
};
