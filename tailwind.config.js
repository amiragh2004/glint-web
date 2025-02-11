/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:'selector',
    content: ["./public/**/*.html"],
    theme: {
      
      extend: {
        colors:{
          "brown":{
            "100": "#ECE0D1",
            "300":"#DBC1AC",
            "600":"#967259",
            "900":"#634832"
  
  
          }
        },
        boxShadow:{
          "normal": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
        },
        borderRadius:{
          "4xl":"2rem"
        },
        fontFamily:{
          "Dana":"Dana",
          "DanaMedium":"Dana Medium",
          "DanaDemiBold":"Dana Bold",
          "MorabbaLight":"Morabba Light",
          "MorabbaMedium":"Morabba Medium",
          "MorabbaBold":"Morabba Bold",
        },
        letterSpacing:{
          "tightest":"-0.065em"
        },
       spacing:{
        "30":"7.5rem"
       },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          lg:"0.625rem",
        }
      },
      backgroundImage:{
        "home-desktop":"url(../images/headerBgDesktop.webp)",
        "home-mobile":"url(../images/headerBgMobile.webp)"
      }
        
      },
      screens: {
        'xs':'480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      }
    },
    plugins: [
      function({addVariant}){
        addVariant('child','&>*');
        addVariant('child-hover','&>*:hover')
      }
    ],
  }
  
  