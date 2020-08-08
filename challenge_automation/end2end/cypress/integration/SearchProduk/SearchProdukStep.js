import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../page/home_page";
import ProductPage from "../../page/product_page";

Given('I Open Home Page website QA FABELIO', () => {
    HomePage.navigatePage('#');
});

Then(/^I search "(.*)" from searchbox product$/, (keyword) => {
    HomePage.searchProduk(keyword);
});

Then(/^I search produk from CSV and Process Add To Cart$/, () => {
    let content;
    cy.readFile('cypress/data/seed_product.csv','utf8').then( (data) => {
        content = data.split(',');

        content.forEach(element => {
            HomePage.searchProduk(element);
            HomePage.findSingleProduct();
            ProductPage.tambahKeTroli();
        });
    });
});

And(/^I choose product "(.*)"$/, (produkName) => {
    HomePage.findProductFromList(produkName);
});

And(/^I choose single product$/, () => {
    HomePage.findSingleProduct();
});

And(/^I click TambahKeranjang for AddToCart$/, () => {
    ProductPage.tambahKeTroli();
});