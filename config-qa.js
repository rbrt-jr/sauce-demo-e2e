const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')

const e2e = {
    baseUrl: 'https://www.qa.saucedemo.com/',
    env: {
        username: 'qa_user',
        password: 'qa_password'
    }

}

module.exports = defineConfig({
    ...baseConfig,
    e2e
}) 