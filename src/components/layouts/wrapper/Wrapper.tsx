import React from "react"
import styled from "styled-components"

import { spacing, width } from "../../../styles/constants"
import { Vertical, VerticalProps } from "../vertical/Vertical"

const StyledVertical = styled(Vertical)<WrapperProps>`
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ maxWidth }) => maxWidth}px;
  padding-left: ${spacing.large}px;
  padding-left: calc(${spacing.large}px + env(safe-area-inset-left));
  padding-right: ${spacing.large}px;
  padding-right: calc(${spacing.large}px + env(safe-area-inset-right));

  @media (max-width: ${width.mobile}px) {
    padding-left: ${spacing.medium}px;
    padding-left: calc(${spacing.medium}px + env(safe-area-inset-left));
    padding-right: ${spacing.medium}px;
    padding-right: calc(${spacing.medium}px + env(safe-area-inset-right));
  }
`

export interface WrapperProps extends VerticalProps {
  /**
   * The maximum width of the wrapper.
   * @default width.desktop
   */
  maxWidth?: number
}

/**
 * Wrapper extends [Vertical](#/Layouts/Vertical) with margins and responsiveness to serve as a
 * wrapper for pages.
 */
export class Wrapper extends React.PureComponent<WrapperProps> {
  render() {
    const { children, maxWidth = width.desktop, ...restProps } = this.props
    return (
      <StyledVertical maxWidth={maxWidth} {...restProps}>
        {children}
      </StyledVertical>
    )
  }
}
