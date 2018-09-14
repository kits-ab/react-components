import { darken } from "polished"
import * as React from "react"
import styled, { css, StyledFunction } from "styled-components"

import { colors, fonts, spacing, width } from "../../styles/constants"
import * as types from "../../types"
import { Link, LinkProps } from "../link/Link"

const sharedStyle = css`
  background-color: ${colors.primary};
  border-radius: 20px;
  display: inline-block;
  color: white;
  font-family: ${fonts.light};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 40px;
  min-width: 280px;
  padding: 0 ${spacing.medium};
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s;

  @media (max-width: ${width.mobile}px) {
    width: 100%;
  }

  &:hover {
    background-color: ${darken(0.1, colors.primary)};
    text-decoration: none;
  }
`

const StyledButton = styled.button`
  ${sharedStyle};
  border: 0;
  outline: 0;
`

const StyledLink = (styled(Link) as StyledFunction<LinkProps>)`
  ${sharedStyle};
`

export interface ButtonProps extends types.BaseProps {
  /** The content of the button. */
  children: React.ReactNode
  /** The url to link to. */
  href?: string
  /** The click handler to call when the buttons is pressed. */
  onClick?: () => void
}

/**
 * Button is used to show a link or actual button that looks like a button.
 */
export class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { children, href, ...restProps } = this.props
    return href ? (
      <StyledLink to={href} {...restProps}>
        {children}
      </StyledLink>
    ) : (
      <StyledButton {...restProps}>{children}</StyledButton>
    )
  }
}
