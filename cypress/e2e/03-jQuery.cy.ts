import MyJQuery from "../support/pages/jQuery.page"

let myJQuery = new MyJQuery

describe('First button should be disabled', () => {
    it('Open page', () => {
        cy.visit(myJQuery.url)
    })
    it('Check the property of the first button', () => {
        myJQuery.getDisabledButton().should('not.be.enabled')
    })
})

describe('Back to JQuery UI button should be working', () => {
    it('Open page', () => {
        cy.visit(myJQuery.url)
    })
    it('Click on the proper button', () => {
        myJQuery.getEnabledButton().trigger('mouseover')
        myJQuery.getBackButton().click()

    })
    it('Should redirect to proper website', () => {
        cy.url().should('eq', 'https://the-internet.herokuapp.com/jqueryui')
    })
})

describe('Download PDF file', () => {
    it('Open page', () => {
        cy.visit(myJQuery.url)
    })
    it('Click on the proper button', () => {
        myJQuery.getEnabledButton().realMouseMove(10,0)
        myJQuery.getDownloadsButton().click()
        myJQuery.getDownloadsButton().realMouseMove(10,0)
        
        cy.window().then(win => {
            const triggerAutIframeLoad = () => {
              const AUT_IFRAME_SELECTOR = '.aut-iframe';
        
              // get the application iframe
              const autIframe = win.parent.document.querySelector(AUT_IFRAME_SELECTOR);
        
              if (!autIframe) {
                throw new ReferenceError(`Failed to get the application frame using the selector '${AUT_IFRAME_SELECTOR}'`);
              }
        
              autIframe.dispatchEvent(new Event('load'));
              // remove the event listener to prevent it from firing the load event before each next unload (basically before each successive test)
              win.removeEventListener('beforeunload', triggerAutIframeLoad);
            };
        
            win.addEventListener('beforeunload', triggerAutIframeLoad);
          });
          
        myJQuery.getPdfButton().realClick()
    })
    it('Check if file has been downloaded', () => {
        cy.readFile('cypress/downloads/menu.pdf')
    })
})