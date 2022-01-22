module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-knobs' // Add the knobs addons
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
