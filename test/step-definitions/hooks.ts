const { Before } = require("cucumber");
import { browser } from "protractor";
import { config } from "../helper/protractor/protractor.conf";

Before({timeout: 10 * 1000}, async () => {
    await browser.get(config.baseUrl);
});
