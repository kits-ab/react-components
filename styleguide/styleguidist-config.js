const path = require("path")

module.exports = {
  assetsDir: "./assets",
  compilerConfig: {
    objectAssign: "Object.assign",
    transforms: {
      dangerousTaggedTemplateString: true
    }
  },
  components: "../src/**/*.{ts,tsx}",
  exampleMode: "collapse",
  getComponentPathLine: componentPath => {
    const name = path.basename(componentPath, ".tsx")
    const dir = path.dirname(componentPath).replace("../src/", "./")
    if (dir.startsWith("./components/")) {
      return `import { ${name} } from "@kokitotsos/react-components"`
    } else {
      return `import ${name} from "${dir}"`
    }
  },
  pagePerSection: true,
  propsParser: require("react-docgen-typescript").parse,
  require: [path.resolve(__dirname, "styleguidist-imports.js")],
  sections: [
    {
      content: "docs/index.md",
      sectionDepth: 0
    },
    {
      name: "Introduction",
      content: "docs/intro.md",
      sections: [
        {
          name: "Colors",
          content: "docs/colors.md"
        },
        {
          name: "Icons",
          content: "docs/icons.md"
        }
      ],
      sectionDepth: 0
    },
    {
      name: "Components",
      components: "../src/components/*/*.tsx",
      description: "All normal components.",
      sectionDepth: 1
    },
    {
      name: "Headings",
      components: "../src/components/headings/*/*.tsx",
      description: "Components to render different kind of headings.",
      sectionDepth: 1
    },
    {
      name: "Layouts",
      components: "../src/components/layouts/*/*.tsx",
      description: "Components that can be used to layout other components.",
      sectionDepth: 1
    }
  ],
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, "styleguidist-wrapper.js")
  },
  styleguideDir: "../dist-styleguide",
  styles: {
    Code: {
      code: {
        backgroundColor: "#f2f2ee",
        borderRadius: "2px",
        fontSize: "80%",
        padding: "3px 5px 3px 5px"
      }
    }
  },
  title: "KITS Components",
  usageMode: "expand",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: "style-loader!css-loader?modules"
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.(jpg|png|svg)$/,
          exclude: /node_modules/,
          loader: "file-loader"
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "awesome-typescript-loader"
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"]
    }
  }
}
