class ProductPage {

    static navigatePage(urls) {
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
    }

    static tambahKeTroli() {
        cy.server();
        cy.route('https://qa.fabelio.com/rest/default/V1/customer/summary').as('getUsersummary');
        cy.route('https://qa.fabelio.com/rest/default/V1/menu/topmenu').as('getTopMenu');

        cy.get('#desktopBannerWrapped button:nth-child(1)').then(($element) => {
            if ($element.is(":visible")) {
                $element.click();
            }}
        )
        
        cy.get('button[type="button"][id="addToCart"]').should('have.text', 'TAMBAH KE TROLI');
        cy.get('button[type="button"][id="addToCart"]').find('span.MuiButton-startIcon.MuiButton-iconSizeLarge img').then(($elm) => {
            $elm.click();
        });
    }

}

export default ProductPage;