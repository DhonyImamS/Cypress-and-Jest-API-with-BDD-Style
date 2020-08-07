import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../page/home_page";

Given('I Open Home Page website QA FABELIO', () => {
    HomePage.navigatePage('#');
});

When('I want to navigate into Promo Page by Click Tab Promo', () => {
    HomePage.clickPromoTab();
});

Then(/^I can see Promo of fabelio through existence label "(.*)"$/, (label) => {
    HomePage.assertionText(label);
});

Then(/^I search "(.*)" from searchbox product$/, (keyword) => {
    HomePage.searchProduk(keyword);
});

And(/^I choose product "(.*)"$/, (produkName) => {
    HomePage.findProductFromList(produkName);
});
