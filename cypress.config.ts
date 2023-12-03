import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'https://api.zeplin.dev/v1',
    video: false,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'results',
    toConsole: true,
    html: true,
    json: true
  },
});

