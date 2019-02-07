import * as React from "react"

import { SubHeading } from "../../components/headings/sub/SubHeading"
import { Vertical } from "../../components/layouts/vertical/Vertical"
import * as types from "../../types"

export interface PersonaProps extends types.BaseProps {
  /** The description of the persona. */
  children: React.ReactNode
  /** The source of the icon to show. */
  iconSrc: string
  /** The source set of the icon to show. */
  iconSrcSet?: string
  /** Set to `true` to indicate that the persona is active. */
  isActive?: boolean
  /** The click handler to call when clicked. */
  onClick?: () => void
  /** The name of the persona. */
  name: string
}

/**
 * Persona is used to show a persona within a personas listing. All formatting is done as part of
 * the `Personas` component so it doesn't make sense to use this component by itself.
 */
export class Persona extends React.PureComponent<PersonaProps> {
  render() {
    const { children, iconSrc, iconSrcSet, name, ...restProps } = this.props
    return (
      <Vertical {...restProps} className={this.getClassNames()}>
        <Vertical alignHorizontal={types.Alignment.Center} className="Persona-title">
          <img alt="" src={iconSrc} srcSet={iconSrcSet} />
          <SubHeading>{name}</SubHeading>
        </Vertical>
        <div className="Persona-content">{children}</div>
      </Vertical>
    )
  }

  private getClassNames = () => {
    const classNames = ["Persona"]
    if (this.props.isActive) {
      classNames.push("is-active")
    }
    if (this.props.className) {
      classNames.push(this.props.className)
    }
    return classNames.join(" ")
  }
}
