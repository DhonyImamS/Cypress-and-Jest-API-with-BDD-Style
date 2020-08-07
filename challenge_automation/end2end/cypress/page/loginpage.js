class LoginPage {

    static navigatePage(urls='#') {
        cy.viewport(1440, 900) 
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
        cy.get('button[type="button"] .MuiIconButton-label').click();
    }

    static setFieldValue(fieldName, fieldValue) {
        let selector='input[name="username"]';

        if (fieldName === 'username') {
            selector = 'input[name="username"]';
        }

        if (fieldName === 'password') {
            selector = 'input[name="password"]';
        }

        cy.get(selector).type(fieldValue);
    }

    static clickButtonLogin() {
        cy.get('button[type="submit"]').click();
    }

    static assertionText(textInput) {
        cy.get('div[class="MuiAlert-message"]').should('have.text', textInput);
    }

}

export default LoginPage;