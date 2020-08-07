import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../page-object/homepage";

Given("I Open website QA FABELIO", () => {
    HomePage.navigatePage('/');
});

When("I want to navigate into Promo Page by Click Tab Promo", () => {
    HomePage.action('click');
});
