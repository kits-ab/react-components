import { transparentize } from "polished"
import React from "react"
import { styled } from "styled-components"

import {
  FacebookIcon,
  GitHubIcon,
  KeybaseIcon,
  LinkedInIcon,
  MicroBlogIcon,
  TwitterIcon
} from "../../icons"
import * as types from "../../types"

export type SocialProps = types.BaseProps & {
  /** The social information to show. */
  info: types.Social
}

const StyledDiv = styled.div`
  color: black;

  > *:not(:first-child) {
    margin-left: 10px;
  }
`

const StyledA = styled.a`
  align-items: center;
  background-color: ${transparentize(0.8, "#000")};
  border-radius: 50%;
  display: inline-flex;
  height: 36px;
  justify-content: center;
  transition: background-color 0.3s;
  width: 36px;

  &:hover {
    background-color: ${transparentize(0.5, "#000")};
  }

  > svg {
    fill: #fff;
    height: 18px;
    width: 18px;
  }
`

const StyledKeybaseIcon = styled(KeybaseIcon)`
  position: relative;
  top: -2px;
`

/**
 * Social is used to create a social media button with a matching icon.
 */
export const Social = ({ info, ...restProps }: SocialProps) => {
  return (
    <StyledDiv {...restProps}>
      {info.twitter && (
        <StyledA href={info.twitter.toLink()}>
          <TwitterIcon />
        </StyledA>
      )}
      {info.facebook && (
        <StyledA href={info.facebook.toLink()}>
          <FacebookIcon />
        </StyledA>
      )}
      {info.microblog && (
        <StyledA href={info.microblog.toLink()}>
          <MicroBlogIcon />
        </StyledA>
      )}
      {info.linkedin && (
        <StyledA href={info.linkedin.toLink()}>
          <LinkedInIcon />
        </StyledA>
      )}
      {info.github && (
        <StyledA href={info.github.toLink()}>
          <GitHubIcon />
        </StyledA>
      )}
      {info.keybase && (
        <StyledA href={info.keybase.toLink()}>
          <StyledKeybaseIcon />
        </StyledA>
      )}
    </StyledDiv>
  )
}
