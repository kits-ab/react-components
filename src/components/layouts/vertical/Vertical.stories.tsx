import React from "react"

import { Vertical, VerticalProps } from "./Vertical"
import { colors, spacing, types } from "../../.."

export default {
  title: "Layouts/Vertical",
  component: Vertical
}

export const Default = (props: VerticalProps) => (
  <Vertical style={{ height: 200 }} {...props}>
    <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>Child 3</div>
  </Vertical>
)

export const WithDifferentAlignment = (props: VerticalProps) => (
  <Vertical
    alignHorizontal={types.Alignment.Center}
    alignVertical={types.Alignment.End}
    style={{ height: 200 }}
    {...props}
  >
    <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>Child 3</div>
  </Vertical>
)

export const WithDistributedHeight = (props: VerticalProps) => (
  <Vertical distribute={true} style={{ height: 200 }} {...props}>
    <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>Child 3</div>
  </Vertical>
)

export const WithCustomFlexing = (props: VerticalProps) => (
  <Vertical style={{ height: 200 }} {...props}>
    <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
  </Vertical>
)

export const WithSpacing = (props: VerticalProps) => (
  <Vertical distribute={true} spacing={spacing.small} style={{ height: 200 }} {...props}>
    <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
  </Vertical>
)

export const WithSpacingAndSeparator = (props: VerticalProps) => (
  <Vertical
    distribute={true}
    separator={true}
    spacing={spacing.small / 2}
    style={{ height: 200 }}
    {...props}
  >
    <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
    <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
    <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
  </Vertical>
)
