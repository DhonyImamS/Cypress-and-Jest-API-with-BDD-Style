class HomePage {

    static navigatePage(urls) {
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
    }

    static action(actionType) {
        cy.get('a[href="/promo/campaigns"]').click();
    }
}

export default HomePage;