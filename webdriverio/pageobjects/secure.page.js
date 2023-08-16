import { $ } from '@wdio/globals'
import Page from './page.js'

class SecurePage extends Page {
    get flashAlert () {
        return $('#flash')
    }

    get header () {
        return $('h2')
    }

    get subheader () {
        return $('.subheader')
    }

    get button() {
        return $('.button')
    }

    async logout() {
        await this.button.click()
    }
}

export default new SecurePage()