import MyIFrame from "../support/pages/iFrame.page"

let myIFrame = new MyIFrame()

describe('Should be able to type text into iFrame editor', () => {
    it('Open page', () => {
        cy.visit(myIFrame.url)
    })
    it('Type some text', () => {
        myIFrame.typeInIFrame('Sample text for testing puropse.')
    })
})