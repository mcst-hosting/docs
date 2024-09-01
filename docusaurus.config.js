// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MCST WiKi',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/mcstio.png',

  // Set the production url of your site here
  url: 'https://wiki.mcst.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mcst-hosting', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mcst-hosting/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/mcstio.png',
      navbar: {
        title: 'MCST Wiki',
        logo: {
          alt: 'MCST Logo',
          src: 'img/mcstio.png',
        },
        items: [
		  {
            href: 'https://mcst.io',
            label: 'Website',
            position: 'left',
          },
		  {
            href: 'https://dc.mcst.io',
            label: 'Support',
            position: 'left',
          },
          {
            href: 'https://github.com/mcst-hosting',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Homepage',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://dc.mcst.io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mcsthosting',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mcst-hosting',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MCST Hosting`,
      },
      "colorMode": {
        "defaultMode": "dark",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    algolia: {
      // The application ID provided by Algolia
      appId: 'ARWUWCZ082',

      // Public API key: it is safe to commit it
      apiKey: 'f672f617e0fa35d59ce5477871d14395',

      indexName: 'mcstwiki',

    },
    }),
};

export default config;
