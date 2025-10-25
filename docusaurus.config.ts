import {themes as prismThemes} from 'prism-react-renderer';

export default {
  title: "Keegan’s Electrical Code of Conduct Bible",
  url: 'https://evanholmes.github.io', //dev
  baseUrl: '/keegan-electrical/', //dev
  organizationName: 'evanholmes',   // your GitHub user
  projectName: 'keegan-electrical', // your repo

  // move deprecated option here:
 markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',
    onBrokenMarkdownImages: 'warn',
  },
},


  presets: [
    ['classic',
      ({
        docs: { routeBasePath: '/', sidebarPath: './sidebars.ts' },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      })
    ],
  ],

  themeConfig: {
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true },
    navbar: { title: 'Keegan’s Electrical Code' },
    prism: { theme: prismThemes.dracula, darkTheme: prismThemes.dracula },
  },

  // use the installed plugin
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), { indexDocs: true, indexBlog: false }]
  ],
};
