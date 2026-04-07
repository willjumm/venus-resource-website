/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed-variant":"#005313","on-surface":"#1c1b1b","on-secondary-container":"#307231",
        "outline":"#707a6c","secondary":"#2a6b2c","on-tertiary":"#ffffff","surface":"#fcf9f8",
        "on-primary-container":"#cbffc2","tertiary":"#006419","outline-variant":"#bfcaba",
        "surface-container-highest":"#e5e2e1","on-primary-fixed-variant":"#005312",
        "primary-container":"#2e7d32","surface-tint":"#1b6d24","background":"#fcf9f8",
        "on-secondary-fixed":"#002203","on-tertiary-container":"#caffc2",
        "on-secondary-fixed-variant":"#0c5216","secondary-fixed-dim":"#91d78a",
        "on-surface-variant":"#40493d","on-background":"#1c1b1b","surface-variant":"#e5e2e1",
        "on-tertiary-fixed":"#002204","on-primary-fixed":"#002204","on-primary":"#ffffff",
        "inverse-on-surface":"#f3f0ef","on-error":"#ffffff","surface-dim":"#dcd9d9",
        "on-error-container":"#93000a","primary-fixed":"#a3f69c","secondary-fixed":"#acf4a4",
        "surface-container-lowest":"#ffffff","error":"#ba1a1a","inverse-surface":"#313030",
        "tertiary-container":"#127f26","surface-container":"#f0eded","error-container":"#ffdad6",
        "tertiary-fixed-dim":"#78dc77","primary":"#0d631b","surface-container-high":"#eae7e7",
        "on-secondary":"#ffffff","tertiary-fixed":"#94f990","primary-fixed-dim":"#88d982",
        "inverse-primary":"#88d982","surface-container-low":"#f6f3f2",
        "surface-bright":"#fcf9f8","secondary-container":"#acf4a4"
      },
      borderRadius: { DEFAULT:"0px", lg:"0px", xl:"0px", full:"9999px" },
      fontFamily: { headline:["Plus Jakarta Sans"], body:["Inter"], label:["Inter"] }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
}
