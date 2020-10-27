import React from "react"

import { Collage, CollageProps } from "./Collage"

export default {
  title: "Components/Collage",
  component: Collage
}

export const Default = (props: CollageProps) => (
  <Collage
    {...props}
    images={[
      { src: "/avatar.jpg" },
      { src: "/avatar.jpg" },
      { src: "/avatar.jpg" },
      { src: "/avatar.jpg" },
      { src: "/avatar.jpg" },
      { src: "/avatar.jpg" },
      { src: "/avatar.jpg" }
    ]}
  />
)
