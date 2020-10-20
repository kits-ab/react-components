const path = require("path")

module.exports = (files) => {
  const exportEntries = files.map((file) => {
    const basename = path.basename(file, path.extname(file))
    return `export * from "./${basename}"`
  })
  return exportEntries.join("\n")
}
