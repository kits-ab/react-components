import { StoryFn } from "@storybook/react-webpack5"
import React from "react"

import { Article, ArticleProps } from "./Article"

export default {
  title: "Components/Article",
  component: Article
}

const Template: StoryFn<ArticleProps> = (args) => (
  <Article {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Article>
)

export const Default = Template.bind({})
Default.args = {
  authors: [{ id: "lorem", name: "Lorem Ipsum" }],
  heading: "Lorem ipsum dolor sit amet",
  href: "#",
  publishTime: new Date("2018-01-01"),
  showAvatars: true,
  showExcerpt: true
}
