import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
