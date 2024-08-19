/** @type {import('prettier').Config} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  trailingComma: "es5",
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,

  tailwindAttributes: ["theme"],
  tailwindFunctions: ["twMerge", "createTheme"],
};
