import { StoryFn } from "@storybook/react"
import React from "react"

import { Image, ImageProps } from "./Image"

export default {
  title: "Components/Image",
  component: Image
}

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  href: "#",
  infoAdditionalText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  infoText: "Lorem Ipsum",
  src: "/image.jpg",
  tooltipText: "A simple tooltip for this image"
}

export const WithoutLink = Template.bind({})
WithoutLink.args = {
  infoAdditionalText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  infoText: "Lorem Ipsum",
  src: "/image.jpg",
  tooltipText: "A simple tooltip for this image"
}

export const WithoutTexts = Template.bind({})
WithoutTexts.args = {
  src: "/image.jpg"
}
