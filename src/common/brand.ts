/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'NewBig ChatGPT',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'NewBig ChatGPT',
  },
  Meta: {
    Description: 'Leading open-source AI web interface to help you learn, think, and do. AI personas, superior privacy, advanced features, and fun UX.',
    SiteName: 'NewBig ChatGPT | Harnessing AI for You',
    ThemeColor: '#434356',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://big-agi.com',
    // App: 'https://get.big-agi.com',
    CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/enricoros/big-agi',
    SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
    // Twitter: 'https://www.twitter.com/enricoros',
  },
};
