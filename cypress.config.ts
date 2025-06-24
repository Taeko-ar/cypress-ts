import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';
// @ts-ignore
import addCypressGrep from '@cypress/grep/src/plugin'
 
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      if (process.env.NODE_ENV !== 'ci') {
        dotenv.config();
      }
      addCypressGrep(on, config);
      config.baseUrl = process.env.CYPRESS_BASE_URL || process.env.BASE_URL || 'http://localhost:3000';
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: false,
    screenshotsFolder: 'cypress/screenshots',
  },
});
