import { Story } from "@storybook/react/types-6-0"
import React from "react"

import { ContentHeading, ContentHeadingProps } from "./ContentHeading"

export default {
  title: "Headings/ContentHeading",
  component: ContentHeading
}

const Template: Story<ContentHeadingProps> = (args) => <ContentHeading children="" {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Lorem ipsum"
}

export const WithLink = Template.bind({})
WithLink.args = {
  children: <a href="https://kits.se">Lorem ipsum</a>
}
