import MyIFrame from '../pageobjects/iFrame.page.js'

describe('Should be able to type text into iFrame editor', () => {
    it('Open page', async () => {
        await MyIFrame.open()
    })
    it('Type some text', async () => {
        await MyIFrame.typeInIFrame()
    })
})