import { StoryFn } from "@storybook/react-webpack5"
import React from "react"

import { Avatar, AvatarProps } from "./Avatar"

export default {
  title: "Components/Avatar",
  component: Avatar
}

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  person: { id: "lorem", name: "Lorem Ipsum", avatarSrc: "/avatar.jpg" },
  showFallback: false,
  width: 120
}

export const WithSmallerImage = Template.bind({})
WithSmallerImage.args = {
  person: { id: "lorem", name: "Lorem Ipsum", avatarSrc: "/avatar.jpg" },
  showFallback: false,
  width: 80
}

export const WithFallbackImage = Template.bind({})
WithFallbackImage.args = {
  person: { id: "lorem", name: "Lorem Ipsum" },
  showFallback: true,
  width: 120
}
