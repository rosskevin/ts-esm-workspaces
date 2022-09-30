// module.exports = {
//   "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
//   "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
//   "framework": {
//     name: "@storybook/react-vite",
//     options: {}
//   },
//   "core": {},
//   "features": {
//     "storyStoreV7": true
//   }
// };

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: [
    "../packages/*/src/**/*.stories.mdx",
    "../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // stories: [
  //   {
  //     directory: '../src/title',
  //     titlePrefix: 'Custom Prefix',
  //   },
  //   {
  //     directory: '../src',
  //     titlePrefix: 'Demo',
  //     files: '*.stories.(js|ts|tsx)',
  //   },
  //   {
  //     directory: '../src',
  //     files: '**/*.mdx',
  //   },
  // ],
  // logLevel: 'debug',
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
  ],
  docs: {
    // enabled: false,
    defaultName: 'Info',
    // docsPage: false,
  },
  // typescript: {
  //   check: true,
  //   checkOptions: {},
  //   reactDocgenTypescriptOptions: {
  //     propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
  //   },
  // },
  core: {
    // channelOptions: { allowFunction: false, maxDepth: 10 },
    // disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
    // storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
    // postcss: false,
    // buildStoriesJson: true,
    // babelModeV7: true,
    // warnOnLegacyHierarchySeparator: false,
    // previewMdx2: true,
    breakingChangesV7: true,
  },
  framework: '@storybook/react-vite',
};
module.exports = config;