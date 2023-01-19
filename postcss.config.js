const env = process.env.NODE_ENV;

// Purge CSS to optimize production builds for @vtmn/css
const purgeCSS =
  env === 'production'
    ? [
        '@fullhuman/postcss-purgecss',
        {
          content: [
            './app/**/*.{js,jsx,ts,tsx}',
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}',
          ],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: ['html', 'body'],
        },
      ]
    : [];

module.exports = {
  plugins: [
    // Default Next.js post css config
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    ...purgeCSS,
  ],
};
