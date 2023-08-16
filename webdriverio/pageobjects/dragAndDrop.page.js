import Page from './page.js'

class DragAndDrop extends Page {

    get leftHeader() {
        return $('#column-a > header') 
    }

    get rightHeader() {
        return $('#column-b > header')
    }

    open() {
        return super.open('drag_and_drop')
    }
}

export default new DragAndDrop()