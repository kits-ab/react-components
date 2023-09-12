import React from "react"

import { Wrapper, WrapperProps } from "./Wrapper"
import { colors, spacing } from "../../.."

export default {
  title: "Layouts/Wrapper",
  component: Wrapper
}

export const Default = (props: WrapperProps) => (
  <Wrapper {...props}>
    <p style={{ backgroundColor: colors.background2, padding: spacing.small }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Wrapper>
)
