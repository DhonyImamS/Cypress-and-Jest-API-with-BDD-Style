class HomePage {

    static navigatePage() {
        cy.visit();
    }

    static action(actionType) {
        cy.get('a[href="/promo/campaigns"]').click();
    }
}

export default HomePage;