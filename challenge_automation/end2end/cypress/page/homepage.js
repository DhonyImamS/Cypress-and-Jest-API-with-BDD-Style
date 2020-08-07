class HomePage {

    static navigatePage(urls) {
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
    }

    static clickPromoTab() {
        cy.get('a[href="/promo/campaigns"]').click();
    }

    static assertionText(textInput) {
        cy.get('a[href="/cp/promo/campaigns/virtual-assistant"]').should('have.text',textInput);
    }
}

export default HomePage;