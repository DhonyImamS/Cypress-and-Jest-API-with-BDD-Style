class HomePage {

    static navigatePage(urls) {
        cy.viewport(1440, 900) 
        cy.visit(`${Cypress.config().baseUrl}${urls}`);

        cy.get('#desktopBannerWrapped button:nth-child(1)').then(($element) => {
            if ($element.is(":visible")) {
                $element.click();
            }}
        )
    }

    static clickPromoTab() {
        cy.get('a[href="/promo/campaigns"]').click();
    }

    static searchProduk(produkName) {
        cy.get('body').find('img[alt="magnifier icon"]').should('be.visible').click();
        cy.get('body').find('input[placeHolder="Cari produk"]').should('be.visible').click().focused().clear().type(produkName).type('{enter}');
        cy.get('div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2 > div').should('have.length.gt', 0);
        
        cy.get('#desktopBannerWrapped button:nth-child(1)').then(($element) => {
            if ($element.is(":visible")) {
                $element.click();
            }}
        )
    }

    static findProductFromList(produkName) {
        cy.get('body').find('section.css-1eanzts>.css-1ud1l9d').should('be.visible').each(async ($el, index) => {
            cy.wrap($el).invoke('text').then((text => {
                if(text.trim() === produkName) {
                    cy.get(`div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2 > div:nth-child(${index+1}) > section[data-test="product"] a.no-highlight img`).click();
                    return false;
                }
            }));
        });        
    }

    static findSingleProduct() {
        cy.get('body').find(`div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2 > div:nth-child(1) > section[data-test="product"] a.no-highlight img`).should('exist').should('be.visible').click();
    }

    static assertionText(textInput) {
        cy.get('a[href="/cp/promo/campaigns/virtual-assistant"]').should('have.text',textInput);
    }
}

export default HomePage;