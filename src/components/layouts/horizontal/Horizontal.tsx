import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/constants"
import * as types from "../../../types"

type P = Partial<HorizontalProps>

const StyledDiv = styled.div<P>`
  align-items: ${(props) => props.alignVertical || ""};
  display: flex;
  flex-flow: ${(props) => (props.wrapRows ? "wrap" : "")};
  flex-direction: row;
  justify-content: ${(props) => props.alignHorizontal || ""};

  & > * {
    flex: ${(props) => (props.distribute ? "1 1 0%" : "")};

    &:not(:first-child) {
      margin-left: ${(props) => (props.spacing ? `${props.spacing / 2}px` : "")};
    }

    &:not(:last-child) {
      margin-right: ${(props) => (props.spacing ? `${props.spacing / 2}px` : "")};
    }
  }

  @media (max-width: ${(props) => props.breakpoint || 0}px) {
    align-items: ${(props) => props.alignHorizontal || ""};
    flex: ${(props) => (props.distribute ? "1 1 auto" : "")};
    flex-direction: column;
    justify-content: ${(props) => props.alignVertical || ""};

    & > *:not(:first-child) {
      margin-left: 0;
      margin-top: ${(props) => (props.spacing ? `${props.spacing / 2}px` : "")};
    }

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: ${(props) => (props.spacing ? `${props.spacing / 2}px` : "")};
    }
  }
`

const StyledSeparator = styled.div`
  align-self: stretch;
  background-color: ${colors.line};
  background-color: var(--line);
  flex: 0 0 1px;
`

export type HorizontalProps = types.BaseProps & {
  /** The horizontal alignment of the child components. */
  alignHorizontal?: types.Alignment
  /** The vertical alignment of the child components. */
  alignVertical?: types.Alignment
  /** The breakpoint at which the layout switches to vertical. */
  breakpoint?: number
  /** The child components of the layout. */
  children: React.ReactNode
  /**
   * Set to `true` to distribute the child components equally.
   * @default false
   */
  distribute?: boolean
  /** The click handler to call when clicked. */
  onClick?: () => void
  /**
   * Set to `true` to show a separator between the child components.
   * @default false
   */
  separator?: boolean
  /** Spacing to add between child components. */
  spacing?: number
  /**
   * The name of the html tag to use.
   * @default div
   */
  tagName?: string
  /**
   * Set to `true` to wrap overflowing child components to new rows.
   * @default false
   */
  wrapRows?: boolean
}

/**
 * Horizontal is used to layout its child components horizontally. If you just add child
 * components it will layout the components according the the width of the component but you can
 * distribute the full width evenly between the components or you can take control yourself by
 * setting the style property `flex` on the components (see the examples).
 */
export const Horizontal = ({
  children,
  separator,
  tagName = "div",
  ...restProps
}: HorizontalProps) => {
  let childIndex = -1
  return (
    <StyledDiv {...restProps} as={tagName as any}>
      {separator
        ? React.Children.map(children, (child) => {
            if (child !== null) {
              childIndex++
            }
            return (
              <>
                {childIndex > 0 && <StyledSeparator />}
                {child}
              </>
            )
          })
        : children}
    </StyledDiv>
  )
}
