import React from "react"
import { styled } from "styled-components"

import { colors, fonts } from "../../styles/constants"
import * as types from "../../types"

const StyledP = styled.p`
  color: ${colors.text2};
  color: var(--text2);
  font-family: ${fonts.thin};
  font-size: 26px;
  font-style: normal;
  font-weight: 200;
  line-height: 1.2;
  margin: 0;
  text-align: center;
`

export type LeadProps = types.BaseProps & {
  /** The content of the lead. */
  children: React.ReactNode
}

/**
 * Lead is used to to show the lead of a page. The lead should be a teaser or a summary of the
 * content of the page.
 */
export const Lead = ({ children, ...restProps }: LeadProps) => {
  return <StyledP {...restProps}>{children}</StyledP>
}
