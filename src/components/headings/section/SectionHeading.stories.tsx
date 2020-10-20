import { Story } from "@storybook/react/types-6-0"
import React from "react"

import { SectionHeading, SectionHeadingProps } from "./SectionHeading"

export default {
  title: "Headings/SectionHeading",
  component: SectionHeading
}

const Template: Story<SectionHeadingProps> = (args) => <SectionHeading children="" {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Lorem ipsum"
}
