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
    
  ],
};

export default sidebars;
