import React from "react"

import { Menu, MenuProps } from "./Menu"

export default {
  title: "Components/Menu",
  component: Menu
}

export const Default = (props: MenuProps) => (
  <Menu
    {...props}
    breakpoint={500}
    links={[
      { text: "Om KITS", href: "/om" },
      { text: "Erbjudanden", href: "/erbjudanden" },
      { text: "Bli en av oss", href: "/jobb" },
      { text: "Blogg", href: "/blogg" }
    ]}
  />
)
