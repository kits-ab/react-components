import * as React from "react"
import styled from "styled-components"

import { colors, fonts, spacing } from "../../../styles/constants"
import * as types from "../../../types"

const StyledH2 = styled.h2`
  color: ${colors.text2};
  font-family: ${fonts.thin};
  font-size: 26px;
  font-style: normal;
  font-weight: 200;
  line-height: 1.2;
  margin: 0;
  position: relative;
  text-align: center;

  &::before {
    border-top: 1px solid ${colors.line};
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 17px;
  }

  > span {
    background-color: ${colors.background1};
    display: inline-block;
    padding: 0 ${spacing.small}px;
    position: relative;
  }
`

export interface SectionHeadingProps extends types.BaseProps {
  /** The content of the heading. */
  children: React.ReactNode
}

/**
 * SectionHeading is used to show a heading for a section of a page. There can be multiple sections
 * but use them sparingly.
 */
export class SectionHeading extends React.PureComponent<SectionHeadingProps> {
  render() {
    const { children, ...restProps } = this.props
    return (
      <StyledH2 {...restProps}>
        <span>{children}</span>
      </StyledH2>
    )
  }
}
