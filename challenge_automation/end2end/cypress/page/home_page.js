class HomePage {

    static navigatePage(urls) {
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
    }

    static clickPromoTab() {
        cy.get('a[href="/promo/campaigns"]').click();
    }

    static searchProduk(produkName) {
        cy.get('input[placeHolder="Cari produk"]').click();
        cy.get('input[placeHolder="Cari produk"]').type(produkName).type('{enter}');
    }

    static findProductFromList(produkName) {
        cy.get('div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2').find('section.css-w11x8x').each(element => cy.log(element));
    }

    static assertionText(textInput) {
        cy.get('a[href="/cp/promo/campaigns/virtual-assistant"]').should('have.text',textInput);
    }
}

export default HomePage;