module.exports = {
  "stories": [
    "../src/lib/components/**/*.stories.mdx",
    "../src/lib/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}
