import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';
 
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      if (process.env.NODE_ENV !== 'ci') {
        dotenv.config();
      }

      config.baseUrl = process.env.CYPRESS_BASE_URL || process.env.BASE_URL || 'http://localhost:3000';
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
