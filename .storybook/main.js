/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules-preset",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    builder: "webpack5",
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    interactionsDebugger: true,
  },
};

module.exports = config;
