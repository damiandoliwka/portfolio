export default class MyJQuery {

    url = 'https://the-internet.herokuapp.com/jqueryui/menu'

    getEnabledButton() {
        return cy.get('#ui-id-3')
    }

    getDisabledButton() {
        return cy.get('#ui-id-1')
    }

    getBackButton() {
        return cy.get('#ui-id-8')
    }

    getDownloadsButton() {
        return cy.get('#ui-id-4')
    }

    getPdfButton() {
        return cy.get('#ui-id-5')
    }
    
}