import React from "react"

import * as types from "../../types"
import { SubHeading } from "../headings/sub/SubHeading"
import { Vertical } from "../layouts/vertical/Vertical"

export type PersonaProps = types.BaseProps & {
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
export const Persona = ({
  children,
  iconSrc,
  iconSrcSet,
  name,
  isActive,
  ...restProps
}: PersonaProps) => {
  const getClassNames = () => {
    const classNames = ["Persona"]
    if (isActive) {
      classNames.push("is-active")
    }
    if (restProps.className) {
      classNames.push(restProps.className)
    }
    return classNames.join(" ")
  }

  return (
    <Vertical {...restProps} className={getClassNames()}>
      <Vertical alignHorizontal={types.Alignment.Center} className="Persona-title">
        <img alt="" src={iconSrc} srcSet={iconSrcSet} />
        <SubHeading>{name}</SubHeading>
      </Vertical>
      <div className="Persona-content">{children}</div>
    </Vertical>
  )
}
