import { defineSupportCode } from 'cucumber';
import { browser, protractor } from 'protractor';
import { SearchPageObject } from '../../src/pages/searchpage';

const search: SearchPageObject = new SearchPageObject();

defineSupportCode((context) => {
  context.When(/^I type "(.*?)"$/, async (text: string) => {
    await search.searchTextBox.sendKeys(text);
  });

  context.Then(/^I click on search button$/, async () => {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  });
});
