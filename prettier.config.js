/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  bracketSpacing: true,
  plugins: [require('prettier-plugin-tailwindcss')],
}
