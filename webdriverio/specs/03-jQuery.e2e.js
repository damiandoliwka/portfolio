import '@wdio/globals'
import MyJQueryPage from '../pageobjects/jQuery.page.js'
import fsp from 'fs/promises'
import fs from 'fs'

describe('First button should be disabled', () => {
    it('Open page', async () => {
        await MyJQueryPage.open()
    })
    it('Check the property of the first button', async () => {
        await expect(MyJQueryPage.disabledButton).toHaveAttribute('aria-disabled', "true")
    })
})

describe('Back to JQuery UI button should be working', () => {
    it('Open page', async () => {
        await MyJQueryPage.open()
    })
    it('Click on the proper button', async () => {
        await MyJQueryPage.enabledButton.moveTo()
        await MyJQueryPage.backButton.waitForDisplayed()
        await MyJQueryPage.backButton.click()
    })
    it('Should redirect to proper website', async () => {
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/jqueryui')
    })
})

describe('Download PDF file', () => {
    it('Open page', async () => {
        await MyJQueryPage.open()
    })
    it('Click on the proper button', async () => {
        await MyJQueryPage.enabledButton.moveTo()
        await MyJQueryPage.downloadsButton.waitForDisplayed()
        await MyJQueryPage.downloadsButton.moveTo()
        await MyJQueryPage.pdfButton.waitForDisplayed()
        await MyJQueryPage.pdfButton.click()
        //simple way to wait for file to download
        //will be refactored in the future
        await browser.pause(1000)
    })
    it('Check for file', async () => {
        const file = './../downloads/menu.pdf'
        fsp.access(file, fs.constants.F_OK, (err) => {
            console.log(`${file} ${err ? 'does not exist' : 'exists'}`)
        })
    })
})