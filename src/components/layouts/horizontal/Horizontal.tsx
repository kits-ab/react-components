import * as React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/constants"
import * as types from "../../../types"

type P = Partial<HorizontalProps>

const StyledDiv = styled.div`
  align-items: ${(props: P) => props.alignVertical || ""};
  display: flex;
  flex-flow: ${(props: P) => (props.wrapRows ? "wrap" : "")};
  flex-direction: row;
  justify-content: ${(props: P) => props.alignHorizontal || ""};

  & > * {
    flex: ${(props: P) => (props.distribute ? "1" : "")};

    &:not(:first-child) {
      margin-left: ${(props: P) => (props.spacing ? `${props.spacing / 2}px` : "")};
    }

    &:not(:last-child) {
      margin-right: ${(props: P) => (props.spacing ? `${props.spacing / 2}px` : "")};
    }
  }

  @media (max-width: ${(props: P) => props.breakpoint || 0}px) {
    align-items: ${(props: P) => props.alignHorizontal || ""};
    flex-direction: column;
    justify-content: ${(props: P) => props.alignVertical || ""};

    & > *:not(:first-child) {
      margin-left: 0;
      margin-top: ${(props: P) => (props.spacing ? `${props.spacing / 2}px` : "")};
    }

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: ${(props: P) => (props.spacing ? `${props.spacing / 2}px` : "")};
    }
  }
`

const StyledSeparator = styled.div`
  align-self: stretch;
  background-color: ${colors.line};
  background-color: var(--line);
  flex: 0 0 1px;
`

export interface HorizontalProps extends types.BaseProps {
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
export class Horizontal extends React.PureComponent<HorizontalProps> {
  render() {
    const { children, separator, tagName = "div", ...restProps } = this.props
    let childIndex = -1
    return (
      <StyledDiv {...restProps} as={tagName as any}>
        {separator
          ? React.Children.map(children, child => {
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
}
