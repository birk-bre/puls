/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      information: {
        dark: "#095ABF",
      },
      primary: {
        10: "#f2f5fdff",
        20: "#e1e9faff",
        30: "#c0cff0ff",
        40: "#8da9e4ff",
        50: "#5376d5ff",
        60: "#253abeff",
        70: "#00149eff",
        80: "#00107eff",
        90: "#050948ff",
      },
      secondary: {
        20: "#e1f9f9ff",
        30: "#c0f2f2ff",
        40: "#9aededff",
        50: "#5cd6d6ff",
        60: "#34c5c5ff",
        70: "#13b1b1ff",
        80: "#0c8e8eff",
        90: "#125c5cff",
      },
      tertiary: {
        20: "#f9eae2ff",
        30: "#fddfd4ff",
        40: "#fbc7bbff",
        50: "#f9a698ff",
        60: "#f98572ff",
        70: "#f3583dff",
        80: "#ab321dff",
        90: "#811c0bff",
      },
      neutral: {
        10: "#f4f5f5ff",
        20: "#ecedeeff",
        30: "#dadbdcff",
        40: "#b6b7b9ff",
        50: "#8f9496ff",
        60: "#6a7073ff",
        70: "#464c50ff",
        80: "#373d40ff",
        90: "#262626ff",
      },
    },
    fontSize: {
      xs: ["0.656rem", { lineHeight: "0.875rem" }],
      sm: ["0.766rem", { lineHeight: "1.094rem" }],
      base: ["0.875rem", { lineHeight: "1.313rem" }],
      lg: ["0.984rem", { lineHeight: "1.531rem" }],
      xl: ["1.094rem", { lineHeight: "1.531rem" }],
      "2xl": ["1.313rem", { lineHeight: "1.750rem" }],
      "3xl": ["1.641rem", { lineHeight: "1.969rem" }],
      "4xl": ["1.969rem", { lineHeight: "2.188rem" }],
      "5xl": ["2.625rem", { lineHeight: "0.875" }],
      "6xl": ["3.281rem", { lineHeight: "0.875" }],
      "7xl": ["3.938rem", { lineHeight: "0.875" }],
      "8xl": ["5.250rem", { lineHeight: "0.875" }],
      "9xl": ["7.000rem", { lineHeight: "0.875" }],
    },
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.109rem",
      1: "0.219rem",
      1.5: "0.328rem",
      2: "0.438rem",
      2.5: "0.547rem",
      3: "0.656rem",
      3.5: "0.766rem",
      4: "0.875rem",
      5: "1.094rem",
      6: "1.313rem",
      7: "1.531rem",
      8: "1.750rem",
      9: "1.969rem",
      10: "2.188rem",
      11: "2.406rem",
      12: "2.625rem",
      14: "3.063rem",
      16: "3.500rem",
      20: "4.375rem",
      24: "5.250rem",
      28: "6.125rem",
      32: "7.000rem",
      36: "7.875rem",
      40: "8.750rem",
      44: "9.625rem",
      48: "10.500rem",
      52: "11.375rem",
      56: "12.250rem",
      60: "13.125rem",
      64: "14.000rem",
      72: "15.750rem",
      80: "17.500rem",
      96: "21.000rem",
    },
    lineHeight: {
      none: "0.875",
      tight: "1.094",
      snug: "1.203",
      normal: "1.313",
      relaxed: "1.422",
      loose: "1.750",
      3: "0.656rem",
      4: "0.875rem",
      5: "1.094rem",
      6: "1.313rem",
      7: "1.531rem",
      8: "1.750rem",
      9: "1.969rem",
      10: "2.188rem",
    },
  },
  plugins: [],
};
