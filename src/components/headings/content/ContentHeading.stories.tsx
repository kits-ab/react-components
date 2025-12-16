import { StoryFn } from "@storybook/react-webpack5"
import React from "react"

import { ContentHeading, ContentHeadingProps } from "./ContentHeading"

export default {
  title: "Headings/ContentHeading",
  component: ContentHeading
}

const Template: StoryFn<ContentHeadingProps> = (args) => <ContentHeading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Lorem ipsum"
}

export const WithLink = Template.bind({})
WithLink.args = {
  children: <a href="https://kits.se">Lorem ipsum</a>
}
