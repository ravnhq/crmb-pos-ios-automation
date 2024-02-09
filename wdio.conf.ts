import type { Options } from '@wdio/types'
import fs from 'fs'
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    exclude: [],

    maxInstances: 1,

    capabilities: [],

    logLevel: 'error',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 999999,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'jasmine',
    reporters: ['spec', ['allure', {
        outputDir: 'reports/allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    jasmineOpts: {

        defaultTimeoutInterval: 9999999,

    },

    /**
    * Gets executed once before all workers get launched.
    * @param {Object} config wdio configuration object
    * @param {Array.<Object>} capabilities list of capabilities details
    */
    onPrepare: function (config, capabilities) {
        if (fs.existsSync("./reports/allure-results")) {
            fs.rmdirSync("./reports/allure-results", { recursive: true });
        }
    },

    afterSuite: async function (suite) {
        if (suite.error) {
            await browser.takeScreenshot();
        }
    }

}
