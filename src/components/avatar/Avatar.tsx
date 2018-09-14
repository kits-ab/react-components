import { transparentize } from "polished"
import * as React from "react"
import styled from "styled-components"

import { colors } from "../../styles/constants"
import * as types from "../../types"

const StyledImg = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
`

const StyledFigure = styled.figure`
  background-color: ${colors.background2};
  border-radius: 50%;
  display: inline-block;
  height: 120px;
  margin: 0;
  overflow: hidden;
  text-align: center;
  width: 120px;

  > svg {
    fill: ${transparentize(0.8, "#000")};
    height: 120px;
    position: relative;
    top: 10px;
    width: 120px;
  }
`

export interface AvatarProps extends types.BaseProps {
  /** The person to show the avatar for. */
  person: types.Person
  /**
   * Set to true to show a fallback image if no image has been specified for the person.
   * @default false
   */
  showFallback?: boolean
}

/**
 * Avatar shows a small image of a person and can optionally fall back to an anonymous image if no
 * image is specified.
 */
export class Avatar extends React.PureComponent<AvatarProps> {
  render() {
    const { person, showFallback = false, ...restProps } = this.props
    return person.avatarSrc ? (
      <StyledImg
        alt={person.name}
        src={person.avatarSrc}
        srcSet={person.avatarSrcSet}
        {...restProps}
      />
    ) : showFallback ? (
      <StyledFigure {...restProps}>
        <svg
          aria-label={person.name}
          role="img"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{person.name}</title>
          <path d="M22.417,14.836c-1.209,2.763-3.846,5.074-6.403,5.074c-3.122,0-5.39-2.284-6.599-5.046   c-7.031,3.642-6.145,12.859-6.145,12.859c0,1.262,0.994,1.445,2.162,1.445h10.581h10.565c1.17,0,2.167-0.184,2.167-1.445   C28.746,27.723,29.447,18.479,22.417,14.836z" />
          <path d="M16.013,18.412c3.521,0,6.32-5.04,6.32-9.204c0-4.165-2.854-7.541-6.375-7.541   c-3.521,0-6.376,3.376-6.376,7.541C9.582,13.373,12.491,18.412,16.013,18.412z" />
        </svg>
      </StyledFigure>
    ) : null
  }
}
