import React from "react"
import { styled } from "styled-components"

import { colors, fonts, width } from "../../../styles/constants"
import * as types from "../../../types"

const StyledH1 = styled.h1`
  color: ${colors.text1};
  color: var(--text1);
  font-family: ${fonts.thin};
  font-size: 64px;
  font-style: normal;
  font-weight: 200;
  line-height: 1.2;
  margin: 0;
  text-align: center;

  @media (max-width: ${width.mobile}px) {
    font-size: 48px;
  }
`

export type MainHeadingProps = types.BaseProps & {
  /** The content of the heading. */
  children: React.ReactNode
}

/**
 * MainHeading is used to show the main heading of a page. There should be one and only one
 * MainHeading per page.
 */
export const MainHeading = ({ children, ...restProps }: MainHeadingProps) => {
  return <StyledH1 {...restProps}>{children}</StyledH1>
}
