import { browser, protractor } from "protractor";
import { SearchPageObject } from "../../src/pages/searchpage";

const { When, Then } = require("cucumber");
const search: SearchPageObject = new SearchPageObject();

When(/^I type "(.*?)"$/, async (text: string) => {
    await search.searchTextBox.sendKeys(text);
});

Then(/^I click on search button$/, async () => {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
});