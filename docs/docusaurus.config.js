const path = require('path');
const fs = require('fs');

componentsSources = {};

fs.readdirSync(path.resolve(__dirname, 'docs/components-sources')).forEach((file) => {
  componentsSources[file] = fs.readFileSync(path.resolve(__dirname, 'docs/components-sources/' + file), 'utf8');
});

const repo = 'https://github.com/emanuelhfarias/tag-components';

module.exports = {
  title: 'Tag Components',
  tagline: 'Experimental polyfill for the component tag',
  url: 'https://tag-components.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'tag-components',
  projectName: 'tag-components',
  scripts: [],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/oceanicNext'),
    },
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      logo: {
        alt: 'Tag Components',
        src: 'img/logo.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      copyright: `See project on <a href="${repo}" target="_blank">GitHub</a>`,
    },
    googleAnalytics: {
      trackingID: 'G-808KN05Y9F',
      anonymizeIP: false,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: repo,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
    componentsSources
  },
  plugins: [
    '@docusaurus/plugin-google-analytics',
  ]
};
