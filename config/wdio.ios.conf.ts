import { config as baseConfig } from '../wdio.conf.js';
import dotenv from 'dotenv'
dotenv.config();
import path from 'path';
export const config = Object.assign(baseConfig, {

    port: 4723,

    specs: ["../test/specs/**/*.spec.ts"],

    capabilities: [
        {
            'maxInstances': 1,
            'appium:platformName': 'iOS',
            'appium:platformVersion': '17.0',
            'appium:deviceName': 'iPad Air (5th generation)',
            'appium:automationName': 'XCUITest',
            'appium:app': path.join(process.cwd(), '/app/crmbPos.app'),
        }
    ],


});