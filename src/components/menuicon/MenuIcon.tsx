import React from "react"
import { styled, keyframes } from "styled-components"

import { colors } from "../../styles/constants"
import * as types from "../../types"

const wobbleIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-80px);
  }

  40% {
    transform: translateY(30px);
  }

  60% {
    transform: translateY(-20px);
  }

  80% {
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

type P = Partial<MenuIconProps>
const StyledDiv = styled("div").withConfig({
  shouldForwardProp: (prop) => !["floatingPosition"].includes(prop)
})<P>`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  position: relative;
  transform: rotate(0deg);
  transition:
    background-color 0.2s ease-in-out,
    top 0.5s ease-in-out,
    transform 0.5s ease-in-out;
  z-index: 1000;
  width: 40px;

  > span {
    background: ${colors.text2};
    background: var(--text2);
    border-radius: 1px;
    display: block;
    height: 2px;
    left: 10px;
    opacity: 1;
    position: absolute;
    transform: rotate(0deg);
    transition: all 0.25s ease-in-out;
    width: 20px;

    &:nth-child(1) {
      top: 14px;
    }

    &:nth-child(2) {
      top: 19px;
    }

    &:nth-child(3) {
      top: 24px;
    }
  }

  &.is-open {
    > span {
      background-color: ${colors.text2};
      background-color: var(--text2);

      &:nth-child(1) {
        top: 19px;
        transform: rotate(135deg);
      }

      &:nth-child(2) {
        left: -40px;
        opacity: 0;
      }

      &:nth-child(3) {
        top: 19px;
        transform: rotate(-135deg);
      }
    }
  }

  &.is-floating {
    animation: 0.5s ${wobbleIn} ease-in-out;
    position: fixed;
    right: ${(props: P) => props.floatingPosition!.right}px;
    top: ${(props: P) => props.floatingPosition!.top}px;

    &:not(.is-open) {
      background-color: rgba(0 0 0 / 20%);

      &:hover {
        background-color: rgba(0 0 0 / 50%);
      }

      > span {
        background: white;
      }
    }
  }
`

export type MenuIconProps = types.BaseProps & {
  /**
   * The position of the icon when in floating mode.
   * @default { right: 15, top: 15 }
   */
  floatingPosition?: { right: number; top: number }
  /**
   * Set to `true` to make the icon float in the top right corner.
   * @default false
   */
  isFloating: boolean
  /**
   * Set to `true` to indicate that the menu is open and that the icon therefore should switch to
   * a close icon.
   * @default false
   */
  isOpen: boolean
  /** The click handler to call when the icon is pressed. */
  onClick?: () => void
}

/**
 * MenuIcon is used to show an icon to show and hide a menu. The icon switches between the open
 * and closed state with a nice animation between. The icon can also be set to be in floating mode
 * where the icon is floating in the top right corner.
 */
export const MenuIcon = ({
  isFloating,
  isOpen,
  floatingPosition = { right: 15, top: 15 },
  onClick,
  ...restProps
}: MenuIconProps) => {
  const className = isOpen
    ? isFloating
      ? "is-floating is-open"
      : "is-open"
    : isFloating
      ? "is-floating"
      : ""
  return (
    <StyledDiv
      className={className}
      floatingPosition={floatingPosition}
      onClick={onClick}
      {...restProps}
    >
      <span />
      <span />
      <span />
    </StyledDiv>
  )
}
