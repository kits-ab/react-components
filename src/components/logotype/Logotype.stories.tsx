import { Story } from "@storybook/react"
import React from "react"

import { colors } from "../.."
import { Logotype, LogotypeProps } from "./Logotype"

export default {
  title: "Components/Logotype",
  component: Logotype,
  argTypes: {
    color: { control: "color" }
  }
}

const Template: Story<LogotypeProps> = (args) => <Logotype {...args} />

export const Default = Template.bind({})
Default.args = {
  color: colors.text1,
  showTagline: true,
  width: 200
}
