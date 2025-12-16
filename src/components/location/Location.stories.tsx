import { StoryFn } from "@storybook/react-webpack5"
import React from "react"

import { Location, LocationProps } from "./Location"

export default {
  title: "Components/Location",
  component: Location
}

const Template: StoryFn<LocationProps> = (args) => <Location {...args} />

export const Default = Template.bind({})
Default.args = {
  coordinates: [57.7001813, 11.9567863],
  title: "Test",
  subtitle: "Test2"
}
