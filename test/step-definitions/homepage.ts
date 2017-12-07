import { browser } from 'protractor';
// tslint:disable
const { Given } = require('cucumber');
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

Given(/^I am on google page$/, async () => {
  await expect(browser.getTitle()).to.eventually.equal('Google');
});

Given(/^I am on cucumber search results page$/, async () => {
  await expect(browser.getTitle()).to.eventually.equal('Google');
});

Given(/^I am on protractor search results page$/, async () => {
  await expect(browser.getTitle()).to.eventually.equal('Google');
});
