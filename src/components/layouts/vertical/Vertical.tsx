import React from "react"
import { styled } from "styled-components"

import { colors } from "../../../styles/constants"
import * as types from "../../../types"

type P = Partial<VerticalProps>

const StyledDiv = styled("div").withConfig({
  shouldForwardProp: (prop) => !["alignHorizontal", "alignVertical", "distribute"].includes(prop)
})<P>`
  align-items: ${(props) => props.alignHorizontal || ""};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.alignVertical || ""};

  & > * {
    flex: ${(props) => (props.distribute ? "1 1 auto" : "")};

    &:not(:first-child) {
      margin-top: ${(props) => (props.spacing ? `${props.spacing}px` : "0")};
    }
  }
`

const StyledSeparator = styled.div`
  align-self: stretch;
  background-color: ${colors.line};
  background-color: var(--line);
  flex: 0 0 1px;
`

export type VerticalProps = types.BaseProps & {
  /** The horizontal alignment of the child components. */
  alignHorizontal?: types.Alignment
  /** The vertical alignment of the child components. */
  alignVertical?: types.Alignment
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
}

/**
 * Vertical is used to layout its child components vertically. If you just add child components it
 * will layout the components according the the height of the component but you can distribute the
 * full height evenly between the components or you can take control yourself by
 * setting the style property `flex` on the components (see the examples).
 */
export const Vertical = ({
  children,
  separator,
  tagName = "div",
  distribute,
  ...restProps
}: VerticalProps) => {
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
