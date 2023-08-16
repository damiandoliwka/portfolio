import { $ } from '@wdio/globals'
import Page from './page.js'

class MyJQueryPage extends Page {

    get enabledButton() {
        return $('#ui-id-3')
    }

    get disabledButton() {
        return $('#ui-id-1')
    }

    get backButton() {
        return $('#ui-id-8')
    }

    get downloadsButton() {
        return $('#ui-id-4')
    }

    get pdfButton() {
        return $('#ui-id-5')
    }

    open() {
        return super.open('jqueryui/menu')
    }   
}

export default new MyJQueryPage()