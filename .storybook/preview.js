import React from "react"

import { GlobalStyles } from "../src"
import theme from "./theme"

const sortOrder = ["About", "Design", "Layouts", "Headings", "Components"]
const addSortOrder = (str) => {
  const groupIndex = str.indexOf("/")
  if (groupIndex > 0) {
    const group = str.substring(0, groupIndex)
    const sortIndex = sortOrder.indexOf(group)
    return `${sortIndex >= 0 ? sortIndex : sortOrder.length}-${str}`
  } else {
    return str
  }
}

const sort = (a, b) => {
  const aKind = addSortOrder(a[1].kind)
  const bKind = addSortOrder(b[1].kind)

  return aKind.localeCompare(bKind)
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: sort,
    theme: theme
  }
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]

export default parameters