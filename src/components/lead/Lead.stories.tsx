import React from "react"

import { Lead, LeadProps } from "./Lead"

export default {
  title: "Components/Lead",
  component: Lead
}

export const Default = (props: LeadProps) => (
  <Lead {...props}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Lead>
)
