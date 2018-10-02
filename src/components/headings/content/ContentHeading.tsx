import * as React from "react"
import styled from "styled-components"

import { colors, fonts } from "../../../styles/constants"
import * as types from "../../../types"

const StyledH3 = styled.h3`
  color: ${colors.link};
  color: var(--link);
  font-family: ${fonts.thin};
  font-size: 26px;
  font-style: normal;
  font-weight: 200;
  line-height: 1.2;
  margin: 0;

  > a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export interface ContentHeadingProps extends types.BaseProps {
  /** The content of the heading. */
  children: React.ReactNode
}

/**
 * ContentHeading is used to show a content heading. The content heading can be a link.
 */
export class ContentHeading extends React.PureComponent<ContentHeadingProps> {
  render() {
    const { children, ...restProps } = this.props
    return <StyledH3 {...restProps}>{children}</StyledH3>
  }
}
