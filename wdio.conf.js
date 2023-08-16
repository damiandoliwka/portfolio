export const config = {
    runner: 'local',
    specs: [
        './webdriverio/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        browserVersion: 'stable'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://the-internet.herokuapp.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}