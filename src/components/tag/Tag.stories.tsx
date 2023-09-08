import React from "react"

import { Tag, TagProps } from "./Tag"
import { Horizontal } from "../.."

export default {
  title: "Components/Tag",
  component: Tag
}

export const Default = (props: TagProps) => (
  <Horizontal spacing={5}>
    <Tag {...props}>Lorem</Tag>
    <Tag>ipsum</Tag>
    <Tag>dolor</Tag>
    <Tag>sit amet</Tag>
    <Tag>consectetur</Tag>
    <Tag>adipiscing</Tag>
    <Tag>elit</Tag>
  </Horizontal>
)
