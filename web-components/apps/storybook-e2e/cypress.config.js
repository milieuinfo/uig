const {defineConfig} = require('cypress')

module.exports = defineConfig({
    fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    modifyObstructiveCode: false,
    video: true,
    videosFolder: '../../dist/cypress/apps/storybook-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/storybook-e2e/screenshots',
    chromeWebSecurity: false,
    e2e: {
        setupNodeEvents(on, config) {
        },
        specPattern: './src/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: './src/support/e2e.ts',
    },
})
