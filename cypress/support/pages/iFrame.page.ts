export default class MyIFrame {

    url = 'https://the-internet.herokuapp.com/iframe'

    getIFrame() {
        return cy.get('#mce_0_ifr')
    }

    typeInIFrame(text:string) {
        this.getIFrame().then(($iframe) => {
            const $body = $iframe.contents().find('body')
            
            cy.wrap($body)
                .find('p')
                .type(text)
        })
    }
}