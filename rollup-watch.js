const config = require("./rollup-config")
const pkg = require("./package.json")
const rollup = require("rollup")

const watcher = rollup.watch(config)

require("dotenv").config()
if (process.env.HOST_PROJECT_PATHS) {
  const ncp = require("ncp").ncp

  watcher.on("event", event => {
    if (event.code === "END") {
      const date = new Date()
      const timestamp = date.toLocaleTimeString("sv-SE").substr(0, 8)
      process.env.HOST_PROJECT_PATHS.split(",").forEach(path => {
        ncp("dist/", `${path}/node_modules/${pkg.name}/dist`, err => {
          if (err) {
            console.info(`Fail ${timestamp}: ${path}`)
            return console.error(err)
          } else {
            console.info(`Success ${timestamp}: ${path}`)
          }
        })
      })
    }
  })
}
