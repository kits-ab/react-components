import { Story } from "@storybook/react/types-6-0"
import React from "react"

import { MainHeading, MainHeadingProps } from "./MainHeading"

export default {
  title: "Headings/MainHeading",
  component: MainHeading
}

const Template: Story<MainHeadingProps> = (args) => <MainHeading children="" {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Lorem ipsum"
}

export const WithLongerText = Template.bind({})
WithLongerText.args = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}
