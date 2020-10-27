import React from "react"
import styled, { css } from "styled-components"

import { NewWindowIcon } from "../../icons/NewWindowIcon"
import { colors, fonts, spacing, width } from "../../styles/constants"
import * as types from "../../types"
import { Link } from "../link/Link"

const sharedStyle = css`
  background-color: ${colors.primary};
  background-color: var(--primary);
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
    background-color: ${colors.primaryDarker};
    background-color: var(--primaryDarker);
    text-decoration: none;
  }
`

const StyledA = styled.a`
  ${sharedStyle};

  > svg {
    fill: white;
    margin-left: ${spacing.small}px;
    vertical-align: baseline;
  }
`

const StyledButton = styled.button`
  ${sharedStyle};
  border: 0;
  outline: 0;
`

const StyledLink = styled(Link)`
  ${sharedStyle};
`

export type ButtonProps = types.BaseProps & {
  /** The content of the button. */
  children: React.ReactNode
  /** The url to link to. */
  href?: string
  /**
   * Set to `true` to open the link in a new window. This only works for external links.
   * @default false
   */
  openInNewWindow?: boolean
  /** The click handler to call when the buttons is pressed. */
  onClick?: () => void
}

/**
 * Button is used to show a link or actual button that looks like a button.
 */
export const Button = ({ children, href, openInNewWindow, ...restProps }: ButtonProps) => {
  let isExternalLink = new RegExp(/^https?:\/\//)
  let isMailLink = new RegExp(/^mailto:/)

  return href && isExternalLink.test(href) ? (
    <StyledA href={href} {...restProps} target={openInNewWindow ? "_blank" : ""}>
      {children}
      {openInNewWindow && <NewWindowIcon height={14} width={14} />}
    </StyledA>
  ) : href && isMailLink.test(href) ? (
    <StyledA href={href} {...restProps}>
      {children}
    </StyledA>
  ) : href ? (
    <StyledLink to={href} {...restProps}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton {...restProps}>{children}</StyledButton>
  )
}
