var path = require("path")

module.exports = {
  mode: "production",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react-components.js",
    library: "reactComponents",
    libraryTarget: "umd"
  },
  externals: [
    "date-fns",
    "date-fns/locale",
    "mapbox-gl",
    "normalize.css",
    "polished",
    "react",
    "react-dom",
    "react-map-gl",
    "react-transition-group",
    "styled-components"
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  }
}
