module.exports = {
  title: 'LocalBitcoin.id | ERC20 Token Generator',
  description: 'Easily deploy Smart Contract for a Standard, Capped, Mintable, Burnable ERC20 Token.',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://www.localbitcoin.id' }],
    ['meta', { property: 'og:image', content: 'https://www.localbitcoin.id/erc20-token-generator.png' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: 'https://www.localbitcoin.id/erc20-token-generator.png' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:title', content: 'ERC20 Token Generator | Create your Token for FREE with ErcGen LocalBitcoin.id' }],
    ['script', { src: 'assets/js/web3.min.js' }],
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-155003690-2',
      },
    ],
  ],
  defaultNetwork: 'mainnet',
};
