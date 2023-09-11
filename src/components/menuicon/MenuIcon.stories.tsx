import { StoryFn } from "@storybook/react"
import React, { useState } from "react"

import { MenuIcon, MenuIconProps } from "./MenuIcon"

export default {
  title: "Components/MenuIcon",
  component: MenuIcon
}

const Template: StoryFn<MenuIconProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen)
  return (
    <div style={{ height: 60 }}>
      <MenuIcon isOpen={isOpen} isFloating={args.isFloating} onClick={() => setIsOpen(!isOpen)} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  isFloating: false,
  isOpen: false
}
