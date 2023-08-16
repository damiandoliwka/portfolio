import LoginPage from '../support/pages/login.page'
import SecureArea from '../support/pages/securearea.page'

let loginPage = new LoginPage()
let secureArea = new SecureArea()

describe('TC-01 - Should log in when valid username and valid password are provided', () => {
	it('Open login page, enter credentials and try to log in', () => {
        cy.visit(loginPage.url)
        loginPage.login(Cypress.env('TEST_USERNAME'), Cypress.env('TEST_PASSWORD'))
    })
    it('Should redirect to proper page', () => {
        cy.url().should('include', '/secure')
    })
    it('Alert box should have proper text', () => {
        secureArea.getFlashAlert().should('include.text', 'You logged into a secure area!')
    })
    it('Header should have proper text', () => {
        secureArea.getHeader().should('include.text', 'Secure Area')
    })
    it('Subeader should have proper text', () => {
        secureArea.getSubheader().should('have.text', 'Welcome to the Secure Area. When you are done click logout below.')
    })
})

describe('TC-02 - Should logout when Logout button is clicked', () => {
	it('Open login page, enter credentials and try to log in', () => {
        cy.visit(loginPage.url)
        loginPage.login(Cypress.env('TEST_USERNAME'), Cypress.env('TEST_PASSWORD'))
    })
    it('Click Logout button', () => {
        secureArea.logout()
    })
    it('Should redirect to correct page', () => {
        cy.url().should('include', '/login')
    })
    it('Alert box should have proper text', () => {
        secureArea.getFlashAlert().should('include.text', 'You logged out of the secure area!')
    })
})

describe('TC-03 - Should not log in when valid username and invalid password are provided', () => {
	it('Open login page, enter credentials and try to log in', () => {
        cy.visit(loginPage.url)
        loginPage.login(Cypress.env('TEST_USERNAME'), 'invalidPassword')
    })
    it('Alert box should have proper text', () => {
        secureArea.getFlashAlert().should('include.text', 'Your password is invalid!')
    })
})

describe('TC-04 - Should not log in when invalid username and valid password are provided', () => {
	it('Open login page, enter credentials and try to log in', () => {
        cy.visit(loginPage.url)
        loginPage.login('invalidUsername', Cypress.env('TEST_PASSWORD'))
    })
    it('Alert box should have proper text', () => {
        secureArea.getFlashAlert().should('include.text', 'Your username is invalid!')
    })
})

describe('TC-05 - Should not log in when valid username and empty password are provided', () => {
	it('Open login page, enter credentials and try to log in', () => {
        cy.visit(loginPage.url)
        loginPage.login(Cypress.env('TEST_USERNAME'), '{backspace}')
    })
    it('Alert box should have proper text', () => {
        secureArea.getFlashAlert().should('include.text', 'Your password is invalid!')
    })
})

describe('TC-06 - Should not log in when empty username and valid password are provided', () => {
	it('Open login page, enter credentials and try to log in', () => {
        cy.visit(loginPage.url)
        loginPage.login('{backspace}', Cypress.env('TEST_PASSWORD'))
    })
    it('Alert box should have proper text', () => {
        secureArea.getFlashAlert().should('include.text', 'Your username is invalid!')
    })
})