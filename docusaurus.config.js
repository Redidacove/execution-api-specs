// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ethereum Execution-API Documentation',
  tagline: 'Find all the execution api specifications here 💯',
  favicon: 'img/ethereum-icon.png',

  // Set the production url of your site here
  url: 'https://Redidacove.github.io',
  trailingSlash: false,
  baseUrl: '/execution-api-specs/',

  // GitHub pages deployment config.
  organizationName: 'Redidacove', // Usually your GitHub org/user name.
  projectName: 'Execution-Api-docs', // Usually your repo name.
  deploymentBranch: 'main',
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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/ethereum/execution-apis/edit/tree/main/docs/',
          admonitions: {
            keywords: [
              "info",
              "success",
              "danger",
              "note",
              "tip",
              "warning",
              "important",
              "caution",
              "security",
              "flaskOnly",
            ],
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/eth-logo.png',
      navbar: {
        title: 'Ethereum',
        logo: {
          alt: 'Ethereum',
          src: 'img/eth-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Sidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/ethereum/execution-apis',
            label: 'Execution-Api GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/ethereum-org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ethereum',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Documentation GitHub',
                href: 'https://github.com/Redidacove/execution-api-specs',
              },
              {
                label: 'Ethereum Website',
                href: 'https://ethereum.org/en/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ethereum, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
