import { Story } from "@storybook/react/types-6-0"
import React from "react"

import { Media, MediaProps } from "./Media"

export default {
  title: "Components/Media",
  component: Media
}

const Template: Story<MediaProps> = (args) => (
  <Media {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      <a href="https://kits.se">https://kits.se</a>
    </p>
  </Media>
)

export const Default = Template.bind({})
Default.args = {
  heading: "Lorem ipsum",
  href: undefined,
  hrefTitle: undefined,
  src: "/media.jpg"
}
