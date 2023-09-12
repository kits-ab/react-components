import { StoryFn } from "@storybook/react"
import React from "react"

import { SectionHeading, SectionHeadingProps } from "./SectionHeading"

export default {
  title: "Headings/SectionHeading",
  component: SectionHeading
}

const Template: StoryFn<SectionHeadingProps> = (args) => <SectionHeading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Lorem ipsum"
}
