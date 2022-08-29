module.exports = ({componentName, jsx}, {tpl}) => {
  const name = { type: "Identifier", name: componentName.replace("Svg", "") }

  return tpl`
    import React from "react"

    import * as types from "../types"

    export const ${name} = (props: types.IconProps) => {
      return ${jsx}
    }
  `
}
