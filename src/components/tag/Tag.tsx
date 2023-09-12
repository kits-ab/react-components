import React from "react"
import { styled } from "styled-components"

import { colors, fonts } from "../../styles/constants"
import * as types from "../../types"

const StyledDiv = styled.div`
  background-color: ${colors.background2};
  background-color: var(--background2);
  border-radius: 3px;
  color: ${colors.text1};
  color: var(--text1);
  font-family: ${fonts.light};
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.5px;
  padding: 5px 10px;
  text-transform: uppercase;
`

export interface TagProps extends types.BaseProps {
  /** The content of the tag. */
  children: React.ReactNode
}

/**
 * Tag is used to show a tag with some content.
 */
export class Tag extends React.PureComponent<TagProps> {
  render() {
    const { children, ...restProps } = this.props
    return <StyledDiv {...restProps}>{children}</StyledDiv>
  }
}
