export default class LoginPage {

    url = 'https://the-internet.herokuapp.com/login'

    getUsernameInput(){
        return cy.get('#username');
    }

    getPasswordInput(){
        return cy.get('#password');
    }

    getLoginButton() {
        return cy.get('[type="submit"]')
    }

    login(username:string, password:string) {
        this.getUsernameInput().type(username)
        this.getPasswordInput().type(password)
        this.getLoginButton().click()
    }
}