import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';

chai.use(chaiAsPromised);
const expect = chai.expect;

defineSupportCode((context) => {
  context.Given(/^I am on google page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal('Google');
  });

  context.Given(/^I am on cucumber search results page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal('Google');
  });

  context.Given(/^I am on protractor search results page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal('Google');
  });
});
