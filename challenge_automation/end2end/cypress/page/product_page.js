class ProductPage {

    static navigatePage(urls) {
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
    }

}

export default ProductPage;