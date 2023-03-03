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
  webpackFinal: async (config, { configType }) => {
    // Disable the default Babel loader
    config.module.rules = config.module.rules.filter(
      (rule) => !/babel-loader/i.test(rule.loader || "")
    );

    // Add SWC loader
    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      include: [path.resolve(__dirname, "../src")],
      use: [
        {
          loader: "swc-loader",
        },
      ],
    });

    return config;
  },
};

module.exports = config;
