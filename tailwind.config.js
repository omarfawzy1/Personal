/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,css,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'max-height'
      },
      animation:{
        scale_up_in:"scale_up_1 1s ease-in 0s 1 normal forward",
        scale_up_out:"scale_up_2 1s ease-in 0s 1 normal backwards",
        blur_up_in: "blur_up 1s ease-in 0s 1 normal forward"
      },
      keyframes:{
        scale_up_1:{
          'from': {transform : "scale(1)"},
          'to': {transform : "scale(1.2)"}
        },
        
        scale_up_2:{
          'from': {transform : "scale(1.2)"},
          'to': {transform : "scale(1)"}
        },

        blur_up:{
          '0%': { "--tw-blur": "blur(0)"},
          '100%': { "--tw-blur": "blur(1)"}
        }
      }
    },
  },
  plugins: [],
}


