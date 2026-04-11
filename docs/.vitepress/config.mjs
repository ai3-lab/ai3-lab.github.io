export default {
  title: 'Joe Yeong Lab',
  description: 'Laboratory of Joe Poh Sheng YEONG - Spatial Omics Research',
  base: '/',

  head: [
    ['meta', { name: 'author', content: 'Joe Poh Sheng YEONG' }],
    ['meta', { name: 'keywords', content: 'spatial omics, cancer immunotherapy, AI pathology, tumor microenvironment, computational biology' }],
    ['meta', { property: 'og:title', content: 'Joe Yeong Lab — AI in Immunology' }],
    ['meta', { property: 'og:description', content: 'Laboratory of Joe Poh Sheng YEONG — Spatial Omics, Cancer Immunotherapy, and AI in Pathology Research' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/team/joe-yeong.svg' }],
  ],

  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: true,
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Joe', link: '/about-joe' },
      { text: 'Innovation', link: '/innovation' },
      { text: 'Team', link: '/team' },
      { text: 'Research', link: '/research' },
      { text: 'News', link: '/news' },
      { text: 'Platforms', link: '/platforms' },
      { text: 'Contact', link: '/contact' }
    ],
    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'About Joe', link: '/about-joe' },
          { text: 'Joe — Editorial Profile', link: '/joe-editorial' },
          { text: 'Innovation & IPs', link: '/innovation' }
        ]
      },
      {
        text: 'Research',
        items: [
          { text: 'Research Overview', link: '/research' },
          { text: 'Platforms', link: '/platforms' },
          { text: 'News & Updates', link: '/news' }
        ]
      },
      {
        text: 'People',
        items: [
          { text: 'Our Team', link: '/team' },
          { text: 'Join Us', link: '/join-our-team' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ai3-lab/ai3-lab.github.io' }
    ],

    footer: {
      message: 'Joe Yeong Laboratory — Spatial Omics Research',
      copyright: 'Copyright © 2025 Joe Poh Sheng YEONG'
    }
  }
}
