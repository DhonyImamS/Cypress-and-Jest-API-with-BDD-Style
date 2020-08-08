class ProductPage {

    static navigatePage(urls) {
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
    }

    static tambahKeTroli() {
        cy.get('button').find('#addToCart .MuiButton-label').click();
        cy.screenshot();
    }

}

export default ProductPage;