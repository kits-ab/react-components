const typescript = require("rollup-plugin-typescript2")
const filesize = require("rollup-plugin-filesize")
const image = require("rollup-plugin-img")
const pkg = require("./package.json")

module.exports = {
  input: "src/index.tsx",
  output: { file: pkg.main, format: "es" },
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
    typescript({
      tsconfigOverride: {
        compilerOptions: { declaration: true }
      },
      cacheRoot: "./.cache/rollup_typescript"
    }),
    image({
      extensions: /\.(jpg|png|svg)$/,
      limit: 1024 * 1024,
      exclude: "node_modules/**"
    }),
    filesize()
  ]
}
