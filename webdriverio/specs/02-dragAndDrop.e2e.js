import '@wdio/globals'
import DragAndDropPage from "../pageobjects/dragAndDrop.page.js"
//I had to use external librabry to handle drag and drop event, because of unsolved bug in WebdriverIO
import { codeForSelectors as dnd } from 'html-dnd'

describe('Should be able to change order of elements by moving left element over right element', () => {
    it('Open page', async() => {
        await DragAndDropPage.open()
    })
    it('Check the default order of elements', async() => {
        await expect(DragAndDropPage.leftHeader).toHaveText('A')
    })
    it('Drag and drop', async() => {
        await browser.execute(dnd, '#column-a', '#column-b')
    })
    it('Check new order of elements', async() => {
        await expect(DragAndDropPage.leftHeader).toHaveText('B')
    })
})

describe('Should be able to change order of elements by moving right element over left element', () => {
    it('Open page', async() => {
        await DragAndDropPage.open()
    })
    it('Check the default order of elements', async() => {
        await expect(DragAndDropPage.rightHeader).toHaveText('B')
    })
    it('Drag and drop', async() => {
        await browser.execute(dnd, '#column-a', '#column-b')
    })
    it('Check new order of elements', async() => {
        await expect(DragAndDropPage.rightHeader).toHaveText('A')
    })
})