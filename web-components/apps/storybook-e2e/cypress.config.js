const { defineConfig } = require('cypress');

module.exports = defineConfig({
    projectId: 'ren9q3',
    fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    modifyObstructiveCode: false,
    video: true,
    videosFolder: '../../dist/cypress/apps/storybook-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/storybook-e2e/screenshots',
    chromeWebSecurity: false,
    retries: 3,
    e2e: {
        setupNodeEvents(on, config) {},
        specPattern: './src/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: './src/support/e2e.ts',
    },
});
