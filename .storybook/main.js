const custom = require('../webpack.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
  webpackFinal: (config) => {
    // do mutation to the config
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules
      },
      resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: [
            ".js",
            ".jsx",
            ".scss",
            ".gif",
            ".png",
            ".jpg",
            ".jpeg",
            ".svg",
            ".ttf",
            ".otf",
            ".json",
            ".webp"
        ]
    },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
        }),
        ...config.plugins
      ]
    };
  },
};
