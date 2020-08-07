class ProductPage {

    static navigatePage(urls) {
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
    }

    static tambahKeTroli() {
        cy.get('button[id="addToCart"]').click();
        cy.screenshot();
    }

}

export default ProductPage;