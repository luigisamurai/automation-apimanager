import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { config } from '../helper/protractor/protractor.conf';

defineSupportCode((context) => {
  context.Before({ timeout: 10000 }, async () => {
    await browser.get(config.baseUrl);
  });
});
