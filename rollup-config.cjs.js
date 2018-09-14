const typescript = require("rollup-plugin-typescript2")
const filesize = require("rollup-plugin-filesize")
const pkg = require("./package.json")

module.exports = {
  input: "src/index.tsx",
  output: { file: pkg.main, format: "cjs" },
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
    filesize()
  ]
}
