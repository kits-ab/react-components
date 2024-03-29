import React from "react"
import { styled } from "styled-components"

import { colors, fonts } from "../../../styles/constants"
import * as types from "../../../types"

const StyledH4 = styled.h4`
  color: ${colors.text2};
  color: var(--text2);
  font-family: ${fonts.thin};
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: 1.2;
  margin: 0;
`

export type SubHeadingProps = types.BaseProps & {
  /** The content of the heading. */
  children: React.ReactNode
}

/**
 * SubHeading is used to show a sub heading.
 */
export const SubHeading = ({ children, ...restProps }: SubHeadingProps) => {
  return <StyledH4 {...restProps}>{children}</StyledH4>
}
