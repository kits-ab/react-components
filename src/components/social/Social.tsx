import { transparentize } from "polished"
import * as React from "react"
import styled from "styled-components"

import { FacebookIcon, GitHubIcon, KeybaseIcon, LinkedInIcon, TwitterIcon } from "../../icons"
import * as types from "../../types"

export interface SocialProps extends types.BaseProps {
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
export class Social extends React.PureComponent<SocialProps> {
  render() {
    const { info, ...restProps } = this.props
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
        {info.linkedIn && (
          <StyledA href={info.linkedIn.toLink()}>
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
}
