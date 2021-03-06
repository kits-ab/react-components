import React from "react"

import { Timeline, TimelineProps } from "./Timeline"

export default {
  title: "Components/Timeline",
  component: Timeline
}

export const Default = (props: TimelineProps) => (
  <Timeline
    {...props}
    events={[
      { date: "2015-01-01", href: "#" },
      { date: "2015-04-01", href: "#" },
      { date: "2016-02-01", href: "#" },
      { date: "2016-11-01", href: "#" },
      { date: "2017-07-01", href: "#" },
      { date: "2018-10-01", href: "#" }
    ]}
  />
)
