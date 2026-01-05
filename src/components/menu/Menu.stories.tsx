import React from "react"

import { Menu, MenuProps } from "./Menu"

export default {
  title: "Components/Menu",
  component: Menu
}

export const Default = (props: MenuProps) => (
  <div style={{ paddingBottom: "100px" }}>
    <Menu
      {...props}
      links={[
        {
          href: "/link-1",
          text: "Link 1"
        },
        {
          href: "/link-2",
          text: "Link 2"
        },
        {
          href: "/link-3",
          text: "Link 3"
        }
      ]}
    />
  </div>
)

export const WithSubmenu = (props: MenuProps) => (
  <div style={{ paddingBottom: "200px" }}>
    <Menu
      {...props}
      links={[
        {
          href: "/link-1",
          text: "Home"
        },
        {
          text: "Services",
          links: [
            { href: "/services/1", text: "Service 1" },
            { href: "/services/2", text: "Service 2" },
            { href: "/services/3", text: "Service 3" }
          ]
        },
        {
          href: "/contact",
          text: "Contact"
        }
      ]}
    />
  </div>
)
