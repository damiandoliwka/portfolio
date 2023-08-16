import DragAndDrop from "../support/pages/dragAndDrop.page"

let dragAndDrop = new DragAndDrop()

describe('Should be able to change order of elements by moving left element over right element', () => {
    it('Open page', () => {
        cy.visit(dragAndDrop.url)
    })
    it('Check the default order of elements', () => {
        dragAndDrop.getLeftHeader().should('have.text', 'A')
    })
    it('Drag and drop', () => {
        dragAndDrop.dragAndDrop('toRight')
    })
    it('Check new order of elements', () => {
        dragAndDrop.getLeftHeader().should('have.text', 'B')
    })
})

describe('Should be able to change order of elements by moving right element over left element', () => {
    it('Open page', () => {
        cy.visit(dragAndDrop.url)
    })
    it('Check the default order of elements', () => {
        dragAndDrop.getRightHeader().should('have.text', 'B')
    })
    it('Drag and drop', () => {
        dragAndDrop.dragAndDrop('toLeft')
    })
    it('Check new order of elements', () => {
        dragAndDrop.getRightHeader().should('have.text', 'A')
    })
})