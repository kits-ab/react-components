import React from "react"

import { Header, HeaderProps } from "./Header"

export default {
  title: "Components/Header",
  component: Header
}

export const Default = (props: HeaderProps) => (
  <div style={{ height: 100 }}>
    <Header
      {...props}
      breakpoint={800}
      links={[
        { text: "Page 1", href: "#" },
        { text: "Page 2", href: "#" }
      ]}
      style={{ position: "absolute" }}
    />
  </div>
)
