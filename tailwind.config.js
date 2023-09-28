/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public"],
  theme: {
    // fontSize : {
    //   // 'mh' : ''
    // },
    extend: {
      spacing : {
        '480' : '30rem'
      },
      backdropBlur: {
        'xs': '2px'
      },
      color : {
        'light-white' : '#F2E7D5'
      },
      spacing : {
        '240' : '240px'
      }
    },
  },
  plugins: [],
}

