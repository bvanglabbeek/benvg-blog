const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: [
        './src/**/*.astro',
        './src/**/*.js',
        './src/**/*.ts',
        './src/**/*.md',
        './public/**/*.html'
      ],
      defaultExtractor: content => content.match(/[^\s"'<>`]+/g) || []
    })
  ]
};