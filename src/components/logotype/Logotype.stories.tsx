import { StoryFn } from "@storybook/react"
import React from "react"

import { Logotype, LogotypeProps } from "./Logotype"
import { colors } from "../.."

export default {
  title: "Components/Logotype",
  component: Logotype,
  argTypes: {
    color: { control: "color" }
  }
}

const Template: StoryFn<LogotypeProps> = (args) => <Logotype {...args} />

export const Default = Template.bind({})
Default.args = {
  color: colors.text1,
  showTagline: true,
  width: 200
}
