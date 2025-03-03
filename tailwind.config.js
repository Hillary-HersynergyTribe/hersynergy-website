/** @type {import('tailwindcss').Config} */

function customSpacing() {
  const maxSpace = 1000;
  const spaces = {};

  for (let i = 2; i <= maxSpace; i += 2) {
    // spaces[i] = `${i}px`;
    const value = i + "px";
    spaces[value] = value;
    // i = i + 2;
  }

  return spaces;
}

module.exports = {
  theme: {
    extend: {
      spacing: customSpacing(),
    },
    colors: {
      violet: {
        50: "#efe9ee",
        100: "#cebbc9",
        200: "#b69aaf",
        300: "#956c8a",
        400: "#814f74",
        500: "#612351",
        600: "#58204a",
        700: "#45193a",
        800: "#35132d",
        900: "#290f22",
      },
      blue: {
        50: "#f7fcfd",
        100: "#e7f4f9",
        200: "#dceff6",
        300: "#cbe8f2",
        400: "#c1e4ef",
        500: "#b2ddeb",
        600: "#a2c9d6",
        700: "#7e9da7",
        800: "#627a81",
        900: "#4b5d63",
      },
      red: {
        50: "#fdf8f9",
        100: "#f8eaed",
        200: "#f4e0e4",
        300: "#f0d1d7",
        400: "#edc9d0",
        500: "#e8bbc4",
        600: "#d3aab2",
        700: "#a5858b",
        800: "#80676c",
        900: "#614f52",
      },
      green: {
        50: "#f8fef0",
        100: "#e8fdd1",
        200: "#ddfcbb",
        300: "#cefb9c",
        400: "#c5fa89",
        500: "#b6f96b",
        600: "#a6e361",
        700: "#81b14c",
        800: "#64893b",
        900: "#4c692d",
      },
      white: {
        50: "#fffffe",
        100: "#fffefb",
        200: "#fffef9",
        300: "#fffdf7",
        400: "#fffdf5",
        500: "#fffcf3",
        600: "#e8e5dd",
        700: "#b5b3ad",
        800: "#8c8b86",
        900: "#6b6a66",
      },
      black: {
        50: "#e6e6e6",
        100: "#b0b0b0",
        200: "#8a8a8a",
        300: "#545454",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
    },
  },
  plugins: [],
};
