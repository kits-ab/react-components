import React from "react"

import { GlobalStyles } from "../src"
import theme from "./theme"

export default {
  parameters : {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: { order: ["About", "Design", "Layouts", "Headings", "Components", '*']},
      theme: theme
    }
  },

  tags: ["autodocs"]
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
