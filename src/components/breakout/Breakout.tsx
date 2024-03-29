import React from "react"
import { styled } from "styled-components"

import * as types from "../../types"

const StyledDiv = styled.div`
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;
  right: 50%;
  width: 100vw;
`

export type BreakoutProps = types.BaseProps & {
  /** The content to break out. */
  children: React.ReactNode
}

/**
 * Breakout is a simple utility component that let content break out of a wrapper component such as
 * [Wrapper](#/Layouts/Wrapper) that is centered and have a maximum width and instead use the full
 * width of the browser window. Be aware that even though this utility can break out anywhere it
 * always uses the full width of the window and it is positioned around the center of the wrapper it
 * is placed in so if the wrapper is not centered this component will be off-center too.
 */
export const Breakout = ({ children, ...restProps }: BreakoutProps) => {
  return <StyledDiv {...restProps}>{children}</StyledDiv>
}
