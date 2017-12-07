import { defineSupportCode } from 'cucumber';
import { SearchPageObject } from '../../src/pages/searchpage';

const search: SearchPageObject = new SearchPageObject();

defineSupportCode((cucumberContext) => {
  cucumberContext.Then(/^I clear the search text$/, async () => {
    await search.searchTextBox.clear();
  });
});
