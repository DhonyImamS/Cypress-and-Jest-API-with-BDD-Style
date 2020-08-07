import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../page/home_page";
import ProductPage from "../../page/product_page";

Given('I Open Home Page website QA FABELIO', () => {
    HomePage.navigatePage('#');
});

Then(/^I search "(.*)" from searchbox product$/, (keyword) => {
    HomePage.searchProduk(keyword);
});

And(/^I choose product "(.*)"$/, (produkName) => {
    HomePage.findProductFromList(produkName);
});

And(/^I click TambahKeranjang for AddToCart$/, () => {
    ProductPage.tambahKeTroli();
});