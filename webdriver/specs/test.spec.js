import LoginPage from "../pageobjects/login.page.js"

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        LoginPage.open()
        LoginPage.login('test', 'test')
    })
})