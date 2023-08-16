export default class SecureArea {

    url = 'https://the-internet.herokuapp.com/secure'

    getHeader() {
        return cy.get('.example > h2')
    }

    getSubheader() {
        return cy.get('.subheader')
    }

    getLogoutButton() {
        return cy.get('.button')
    }

    getFlashAlert() {
        return cy.get('#flash')
    }
    
    logout() {
        this.getLogoutButton().click()
    }
}