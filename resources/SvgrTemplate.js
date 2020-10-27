module.exports = ({ template }, opts, { componentName, jsx }) => {
  const typeScriptTpl = template.smart({ plugins: ["typescript"] })
  const name = { type: "Identifier", name: componentName.name.replace("Svg", "") }

  return typeScriptTpl.ast`
    import React from "react"
    
    import * as types from "../types"

    export const ${name} = (props: types.IconProps) => {
      return ${jsx}
    }
  `
}
