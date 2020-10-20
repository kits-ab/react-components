import { Story } from "@storybook/react/types-6-0"
import React from "react"

import { SubHeading, SubHeadingProps } from "./SubHeading"

export default {
  title: "Headings/SubHeading",
  component: SubHeading
}

const Template: Story<SubHeadingProps> = (args) => <SubHeading children="" {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Lorem ipsum"
}

export const WithLongerText = Template.bind({})
WithLongerText.args = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}
