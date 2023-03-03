module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      use: {
        loader: "swc-loader",
      },
    });
    return config;
  },
};
