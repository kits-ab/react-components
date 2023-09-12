import React from "react"

import { Breakout } from "./Breakout"
import { BreakoutProps, colors, spacing, Wrapper } from "../.."

export default {
  title: "Components/Breakout",
  component: Breakout
}

export const Default = (props: BreakoutProps) => (
  <Wrapper style={{ backgroundColor: colors.primary, maxWidth: 300 }} {...props}>
    <p>Wrapper</p>
    <Breakout
      style={{
        backgroundColor: colors.accent1,
        paddingBottom: spacing.small,
        paddingTop: spacing.small
      }}
    >
      <Wrapper style={{ backgroundColor: colors.accent2, maxWidth: 400 }}>
        <p>Child 1</p>
      </Wrapper>
    </Breakout>
  </Wrapper>
)
