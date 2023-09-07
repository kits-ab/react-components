import React from "react"
import styled from "styled-components"

import { colors } from "../../styles/constants"
import * as types from "../../types"

type P = Partial<AvatarProps>

const StyledImg = styled.img<P>`
  border-radius: 50%;
  height: ${(props) => props.width}px;
  width: ${(props) => props.width}px;
`

const StyledFigure = styled.figure<P>`
  background-color: ${colors.background2};
  background-color: var(--background2);
  border-radius: 50%;
  display: inline-block;
  height: ${(props: P) => props.width}px;
  margin: 0;
  overflow: hidden;
  text-align: center;
  width: ${(props: P) => props.width}px;

  > svg {
    fill: ${colors.background3};
    fill: var(--background3);
    height: ${(props: P) => props.width}px;
    position: relative;
    top: 10px;
    width: ${(props: P) => props.width}px;
  }
`

export type AvatarProps = types.BaseProps & {
  /** The person to show the avatar for. */
  person: types.Person | types.ExternalPresenter
  /**
   * Set to `true` to show a fallback image if no image has been specified for the person.
   * @default false
   */
  showFallback?: boolean
  /**
   * The width of the avatar.
   * @default 120
   */
  width?: number
}

/**
 * Avatar shows a small image of a person and can optionally fall back to an anonymous image if no
 * image is specified.
 */
export const Avatar = ({
  person,
  showFallback = false,
  width = 120,
  ...restProps
}: AvatarProps) => {
  return person.avatarSrc ? (
    <StyledImg
      alt={person.name}
      src={person.avatarSrc}
      srcSet={person.avatarSrcSet}
      width={width}
      {...restProps}
    />
  ) : showFallback ? (
    <StyledFigure width={width} {...restProps}>
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
