/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  Sidebar: [
    'intro',
    {
      type: 'category',
      label: 'Frequent Issues',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Frequent Questions',
        description:
          "Some frequent questions we are asked a lot.",
        keywords: ['faq'],
      },
      items: [
        'frequent-issues/connection-refused',
        'frequent-issues/server-suspended',
      ],
    },
    {
      type: 'category',
      label: '',
      link: {
        type: 'generated-index',
        title: 'Guides',
        description:
          "Some frequent questions we are asked a lot.",
        keywords: ['guides'],
      },
      items: [
        'faq/activate-affiliates',
        'faq/add-plugins',
        'faq/adding-subdomain',
        'faq/cancel-server',
        'faq/change-email',
        'faq/change-motd',
        'faq/change-server-icon',
        'faq/change-server-version',
        'faq/claim-giftcard',
        'faq/make-server-private',
        'faq/password-reset',
        'faq/setup-2fa',
        'faq/upload-files',
      ],
    },
    {
      Others: ['what-is-asked/server-url'],
    }
  ],
};

export default sidebars;
