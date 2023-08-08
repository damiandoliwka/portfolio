export default class DragAndDrop {

    url = 'https://the-internet.herokuapp.com/drag_and_drop'

    getLeftElement() {
        return cy.get('#column-a')
    }

    getRightElement() {
        return cy.get('#column-b')
    }

    getLeftHeader() {
        return cy.get('#column-a > header') 
    }

    getRightHeader() {
        return cy.get('#column-b > header')
    }

    dragAndDrop(direction: 'toLeft' | 'toRight') {
        const dataTransfer = new DataTransfer()
        if(direction == 'toRight') {
            this.getLeftElement().trigger('dragstart', {dataTransfer})
            this.getRightElement().trigger('drop', {dataTransfer})
        }
        else {
            this.getRightElement().trigger('dragstart', {dataTransfer})
            this.getLeftElement().trigger('drop', {dataTransfer})
        }
    }
}