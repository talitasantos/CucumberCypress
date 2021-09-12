/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements

class LoginPage {

    accessCreateAnAccountPage() {
        cy.get(loginElements.createAnAccountButton()).click()
    }

    enterEmailAddressLeft() {
        cy.get(loginElements.emailAddressLeftInput()).type('user.robot@email.com')
    }
}

export default LoginPage