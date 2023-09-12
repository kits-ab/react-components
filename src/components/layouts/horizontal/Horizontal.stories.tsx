import React from "react"

import { Horizontal, HorizontalProps } from "./Horizontal"
import { colors, spacing, types, width } from "../../.."

export default {
  title: "Layouts/Horizontal",
  component: Horizontal
}

export const Default = (props: HorizontalProps) => (
  <Horizontal {...props}>
    <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>Child 3</div>
  </Horizontal>
)

export const WithDifferentAlignment = (props: HorizontalProps) => (
  <Horizontal
    alignHorizontal={types.Alignment.End}
    alignVertical={types.Alignment.Center}
    {...props}
  >
    <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>
      Child 1.1
      <br />
      Child 1.2
      <br />
      Child 1.3
    </div>
    <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>
      Child 3.1
      <br />
      Child 3.2
    </div>
  </Horizontal>
)

export const WithDistributedWidth = (props: HorizontalProps) => (
  <Horizontal distribute={true} {...props}>
    <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>Child 3</div>
  </Horizontal>
)

export const WithCustomFlexing = (props: HorizontalProps) => (
  <Horizontal {...props}>
    <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
  </Horizontal>
)

export const WithSpacing = (props: HorizontalProps) => (
  <Horizontal distribute={true} spacing={spacing.small} {...props}>
    <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
  </Horizontal>
)

export const WithSpacingAndSeparator = (props: HorizontalProps) => (
  <Horizontal distribute={true} separator={true} spacing={spacing.small / 2} {...props}>
    <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
  </Horizontal>
)

export const WithWrappingAndOverflowingChildComponents = (props: HorizontalProps) => {
  const style = { margin: spacing.small / 2, minWidth: 300, padding: spacing.small }
  return (
    <Horizontal distribute={true} style={{ margin: -spacing.small / 2 }} wrapRows={true} {...props}>
      <div style={{ backgroundColor: colors.primary, ...style }}>Child 1</div>
      <div style={{ backgroundColor: colors.accent1, ...style }}>Child 2</div>
      <div style={{ backgroundColor: colors.accent2, ...style }}>Child 3</div>
      <div style={{ backgroundColor: colors.accent3, ...style }}>Child 4</div>
      <div style={{ backgroundColor: colors.background2, ...style }}>Child 5</div>
    </Horizontal>
  )
}

export const WithBreakpoint = (props: HorizontalProps) => (
  <Horizontal breakpoint={width.tablet} separator={true} spacing={spacing.small / 2} {...props}>
    <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
  </Horizontal>
)
