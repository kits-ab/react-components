module.exports = ({ template }, opts, { imports, componentName, props, jsx }) => {
  const typeScriptTpl = template.smart({ plugins: ["typescript"] })
  const name = { type: "Identifier", name: componentName.name.replace("Svg", "") }

  return typeScriptTpl.ast`
    import * as React from "react"
    
    import * as types from "../types"
    
    export class ${name} extends React.PureComponent<types.IconProps> {
      render () {
        const props = this.props
        return ${jsx}
      }
    }
  `
}
