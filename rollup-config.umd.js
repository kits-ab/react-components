const commonjs = require("rollup-plugin-commonjs")
const css = require("rollup-plugin-css-only")
const filesize = require("rollup-plugin-filesize")
const resolve = require("rollup-plugin-node-resolve")
const typescript = require("rollup-plugin-typescript2")
const pkg = require("./package.json")

module.exports = {
  input: "src/index.tsx",
  output: {
    name: "ReactComponents",
    file: pkg.browser,
    format: "umd",
    globals: {
      "normalize.css": "normalize",
      react: "react",
      "react-dom": "reactdom",
      "react-transition-group": "transitiongroup",
      "styled-components": "styled",
      polished: "polished",
      "date-fns": "date",
      "date-fns/locale/sv": "sv"
    }
  },
  external: [
    "date-fns",
    "date-fns/locale/sv",
    "normalize.css",
    "polished",
    "react",
    "react-dom",
    "react-transition-group",
    "styled-components"
  ],
  plugins: [
    resolve(),
    commonjs(),
    css(),
    typescript({
      cacheRoot: "./.cache/rollup_typescript"
    }),
    filesize()
  ]
}
