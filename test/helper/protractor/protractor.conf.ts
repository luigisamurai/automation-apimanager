import { browser, Config } from 'protractor';

export const config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://www.google.com',
  capabilities: {
    browserName: 'chrome'
  },
  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    require: ['../../../../test/step-definitions/*.ts'],
    strict: true,
    tags: '@TypeScriptScenario or @ProtractorScenario or @CucumberScenario'
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  getPageTimeout: 3000,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },
  specs: [
    '../../../../test/features/*.feature'
  ]
};
