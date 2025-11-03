const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    env: {
      apiBaseUrl: 'https://serverest.dev',
      adminEmail: 'fulano@qa.com',
      adminPassword: 'teste'
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    setupNodeEvents(on, config) {
      // hooks para reporter/mochawesome se quiser
      return config
    },
  },
})