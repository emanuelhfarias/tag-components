module.exports = {
  title: 'Tag Components',
  tagline: 'aa',
  url: 'https://github.com/emanuelhfarias/declarative-custom-elements',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'tag-components',
  projectName: 'tag-components',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Tag Components',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: "https://github.com/emanuelhfarias/declarative-custom-elements",
          position: "right",
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `See project on GitHub`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/emanuelhfarias/declarative-custom-elements',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
