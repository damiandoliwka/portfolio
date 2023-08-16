import { $ } from '@wdio/globals'
import Page from './page.js'

class MyIFrame extends Page {

    get iFrame() {
        return $('#mce_0_ifr')
    }

    get place() {
        return $('#tinymce > p')
    }

    async typeInIFrame() {
        await browser.switchToFrame(await this.iFrame)
        await this.place.setValue('some test text')
    }

    open() {
        return super.open('iframe')
    }
}

export default new MyIFrame()