export default class SecurePage {

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
    
    logout() {
        this.getLogoutButton().click()
    }
}