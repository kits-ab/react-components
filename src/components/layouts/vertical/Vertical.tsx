import * as React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/constants"
import * as types from "../../../types"

type P = Partial<VerticalProps>

const StyledDiv = styled.div`
  align-items: ${(props: P) => props.alignHorizontal || ""};
  display: flex;
  flex-direction: column;
  justify-content: ${(props: P) => props.alignVertical || ""};

  & > * {
    flex: ${(props: P) => (props.distribute ? "1" : "")};

    &:not(:first-child) {
      margin-top: ${(props: P) => (props.spacing ? `${props.spacing}px` : "0")};
    }
  }
`

const StyledSeparator = styled.div`
  align-self: stretch;
  background-color: ${colors.line};
  flex: 0 0 1px;
`

export interface VerticalProps extends types.BaseProps {
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
export class Vertical extends React.PureComponent<VerticalProps> {
  render() {
    const { children, separator, tagName, ...restProps } = this.props
    const Wrapper = tagName ? StyledDiv.withComponent(tagName as any) : StyledDiv
    let childIndex = -1
    return (
      <Wrapper {...restProps}>
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
      </Wrapper>
    )
  }
}
