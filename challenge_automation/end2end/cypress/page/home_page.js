class HomePage {

    static navigatePage(urls) {
        cy.viewport(1440, 900) 
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
    }

    static clickPromoTab() {
        cy.get('a[href="/promo/campaigns"]').click();
    }

    static searchProduk(produkName) {
        cy.get('img[alt="magnifier icon"]').click();
        cy.get('input[placeHolder="Cari produk"]').click().focused().clear().type(produkName).type('{enter}');
    }

    static findProductFromList(produkName) {
        cy.get('body').find('section.css-1eanzts>.css-1ud1l9d').each(async ($el, index) => {
            cy.wrap($el).invoke('text').then((text => {
                if(text.trim() === produkName) {
                    cy.get(`div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2 > div:nth-child(${index+1}) > section[data-test="product"] a.no-highlight img`).click();
                    return false;
                }
            }));
        });        
    }

    static findSingleProduct() {
        cy.get(`div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2 > div:nth-child(1) > section[data-test="product"] a.no-highlight img`).click();
    }

    static assertionText(textInput) {
        cy.get('a[href="/cp/promo/campaigns/virtual-assistant"]').should('have.text',textInput);
    }
}

export default HomePage;