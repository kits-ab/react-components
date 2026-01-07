import { StoryFn } from "@storybook/react-webpack5"
import React from "react"

import { SubHeading, SubHeadingProps } from "./SubHeading"

export default {
  title: "Headings/SubHeading",
  component: SubHeading
}

const Template: StoryFn<SubHeadingProps> = (args) => <SubHeading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Lorem ipsum"
}

export const WithLongerText = Template.bind({})
WithLongerText.args = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}
