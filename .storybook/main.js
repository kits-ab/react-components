module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|mdx|ts|tsx)", "../styleguide/**/*.stories.mdx"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"  ],

  features: {
    postcss: false,
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin'
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
}
