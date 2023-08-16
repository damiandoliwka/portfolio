import { defineConfig } from "cypress";
import 'dotenv/config'

export default defineConfig({
  env: {...process.env},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://the-internet.herokuapp.com/',
    testIsolation: false,
  },
});
