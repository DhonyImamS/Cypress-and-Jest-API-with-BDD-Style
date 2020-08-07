import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../page/homepage";

Given('I Open Home Page website QA FABELIO', () => {
    HomePage.navigatePage('#');
});

When('I want to navigate into Promo Page by Click Tab Promo', () => {
    HomePage.clickPromoTab();
});

Then(/^I can see Promo of fabelio through existence label "(.*)"$/, (label) => {
    HomePage.assertionText(label);
});
