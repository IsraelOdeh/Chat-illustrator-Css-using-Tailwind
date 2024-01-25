/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
    colors:{
      "cTextPaleViolet": "hsl(276, 100%, 81%)",
      "cTModerateViolet": "hsl(276, 55%, 52%)",
      "cTDesaturatedDarkViolet": "hsl(271, 15%, 43%)",
      "cTGrayishBlue": "hsl(206, 6%, 79%)",
      "cTVeryDarkDesaturatedViolet": "hsl(271, 36%, 24%)",
      "cTDarkGrayishViolet": "hsl(270, 7%, 64%)",
      "cSWhite": "hsl(0, 0%, 100%)",
      "cSLightGrayishViolet": "hsl(270, 20%, 96%)",
      "cSVeryDarkDesaturatedViolet": "hsl(271, 36%, 24%)",
      "cSVeryLightMagenta": "hsl(289, 100%, 72%)",

      
"cGLightMagenta": "hsl(293, 100%, 63%)",
"cGLightViolet": "hsl(264, 100%, 61%)",

"cWhite": "hsl(0, 0%, 100%)",
"cLightGrayishViolet": "hsl(270, 20%, 96%)",
"cVeryDarkDesaturatedViolet": "hsl(271, 36%, 24%)",
"cVeryLightMagenta": "hsl(289, 100%, 72%)",

"fromGradient" : "hsl(264, 100%, 61%)",
"toGradient" : "hsl(293, 100%, 63%)",


},
fontFamily:{
  'rubik':   ["Rubik","sans-serif"]
}
    },
  },
  plugins: [],
}

