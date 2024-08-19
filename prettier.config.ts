import { config } from "process";

/** @type {import('prettier').Config} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  // tailwindcss
  tailwindAttributes: ["theme"],
  tailwindFunctions: ["twMerge", "createTheme"],
  config: {
    trailingComma: "es5",
    semi: true,
    tabWidth: 2,
    singleQuote: true,
    jsxSingleQuote: true,
    plugins: ["prettier-plugin-tailwindcss"],
  },
};
