
module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|mdx|ts|tsx)", "../styleguide/**/*.stories.mdx"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
      ],

  features: {
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
}
