import { Story } from "@storybook/react/types-6-0"
import React from "react"

import { Button, ButtonProps } from "./Button"

export default {
  title: "Components/Button",
  component: Button
}

const Template: Story<ButtonProps> = (args) => <Button children="" {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Lorem ipsum",
  href: undefined,
  openInNewWindow: false
}

export const WithLink = Template.bind({})
WithLink.args = {
  children: "Lorem ipsum",
  href: "https://kits.se",
  openInNewWindow: false
}

export const WithLinkInNewWindow = Template.bind({})
WithLinkInNewWindow.args = {
  children: "Lorem ipsum",
  href: "https://kits.se",
  openInNewWindow: true
}
