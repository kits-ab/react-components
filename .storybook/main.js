
module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|mdx|ts|tsx)", "../styleguide/**/*.mdx"],
  addons: ["@storybook/addon-links", "@storybook/addon-docs"],
  staticDirs: ['../styleguide/assets'],

  features: {
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: false
      }
    }
  },

  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      "@babel/preset-typescript",
      "@babel/preset-react"
    ],
    plugins: [
      ...options.plugins,
      "@babel/plugin-proposal-class-properties"
    ]
  }),

  webpackFinal: async (config) => {
    // Manually add rule for TypeScript since it seems missing
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
             // Use the same presets as we configured for babel above, or generic ones
             presets: [
               "@babel/preset-env",
               "@babel/preset-typescript",
               "@babel/preset-react"
             ],
             plugins: [
               "@babel/plugin-proposal-class-properties"
             ]
          }
        }
      ],
      exclude: /node_modules/,
    });

    return config;
  }
}
