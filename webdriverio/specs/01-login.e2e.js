import '@wdio/globals'
import 'dotenv/config.js'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('TC-01 - Should log in when valid username and valid password are provided', () => {
	it('Open login page, enter credentials and try to log in', async() => {
        await LoginPage.open()
        await LoginPage.login(process.env.TEST_USERNAME, process.env.TEST_PASSWORD)
    })
    it('Should redirect to proper page', async () => {
        await expect(browser).toHaveUrlContaining('/secure')
    })
    it('Alert box should have proper text', async () => {
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })
    it('Header should have proper text', async () => {
        await expect(SecurePage.header).toHaveTextContaining('Secure Area')
    })
    it('Subeader should have proper text', async () => {
        await expect(SecurePage.subheader).toHaveTextContaining('Welcome to the Secure Area. When you are done click logout below.')
    })
})

describe('TC-02 - Should logout when Logout button is clicked', () => {
	it('Open login page, enter credentials and try to log in', async() => {
        await LoginPage.open()
        await LoginPage.login(process.env.TEST_USERNAME, process.env.TEST_PASSWORD)
    })
    it('Click Logout button', async() => {
        SecurePage.logout()
    })
    it('Should redirect to correct page', async() => {
        await expect(browser).toHaveUrlContaining('/login')
    })
    it('Alert box should have proper text', async() => {
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged out of the secure area!')
    })
})

describe('TC-03 - Should not log in when valid username and invalid password are provided', () => {
	it('Open login page, enter credentials and try to log in', async() => {
        await LoginPage.open()
        await LoginPage.login(process.env.TEST_USERNAME, 'invalidpassword')
    })
    it('Alert box should have proper text', async() => {
        await expect(SecurePage.flashAlert).toHaveTextContaining('Your password is invalid!')
    })
})

describe('TC-04 - Should not log in when invalid username and valid password are provided', () => {
	it('Open login page, enter credentials and try to log in', async() => {
        await LoginPage.open()
        await LoginPage.login('invalidusername', process.env.TEST_PASSWORD)
    })
    it('Alert box should have proper text', async() => {
        await expect(SecurePage.flashAlert).toHaveTextContaining('Your username is invalid!')
    })
})

describe('TC-05 - Should not log in when valid username and empty password are provided', () => {
	it('Open login page, enter credentials and try to log in', async() => {
        await LoginPage.open()
        await LoginPage.login(process.env.TEST_USERNAME, '')
    })
    it('Alert box should have proper text', async() => {
        await expect(SecurePage.flashAlert).toHaveTextContaining('Your password is invalid!')
    })
})

describe('TC-06 - Should not log in when empty username and valid password are provided', () => {
	it('Open login page, enter credentials and try to log in', async() => {
        await LoginPage.open()
        await LoginPage.login('', process.env.TEST_PASSWORD)
    })
    it('Alert box should have proper text', async() => {
        await expect(SecurePage.flashAlert).toHaveTextContaining('Your username is invalid!')
    })
})