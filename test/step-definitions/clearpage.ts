import { SearchPageObject } from '../../src/pages/searchpage';
// tslint:disable
const { Then } = require('cucumber');

const search: SearchPageObject = new SearchPageObject();

Then(/^I clear the search text$/, async () => {
  await search.searchTextBox.clear();
});
