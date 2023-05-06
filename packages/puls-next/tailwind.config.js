const sharedConfig = require("@puls/tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  darkMode: ["class"],
  presets: [sharedConfig],
  plugins: [require("tailwindcss-animate")],
};
