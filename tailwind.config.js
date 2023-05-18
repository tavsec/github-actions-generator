module.exports = {
  content: [
    './components/**/*.{js,vue,ts,mjs}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts,mjs}',
    './nuxt.config.{js,ts,mjs}',
    './node_modules/flowbite.{js,ts,mjs}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
