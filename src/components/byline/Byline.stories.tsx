import { Story } from "@storybook/react/types-6-0"
import React from "react"

import { Byline, BylineProps } from "./Byline"

export default {
  title: "Components/Byline",
  component: Byline
}

const Template: Story<BylineProps> = (args) => <Byline {...args} />

export const Default = Template.bind({})
Default.args = {
  persons: [{ id: "lorem", name: "Lorem Ipsum", href: "#" }],
  publishTime: new Date("2018-01-01")
}

export const WithMultiplePersons = Template.bind({})
WithMultiplePersons.args = {
  persons: [
    { id: "lorem", name: "Lorem Ipsum", href: "#" },
    { id: "ipsum", name: "Ipsum Dolor" }
  ],
  publishTime: new Date("2018-01-01")
}
