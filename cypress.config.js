const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/",
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(`Soy el console log del task ${message}`);
          return null;
        },
      });
      // implement node event listeners here
    },
    excludeSpecPattern: [
      "/1-getting-started/*.js",
      "/2-advanced-exmaples/*.js",
    ],
  },
});
