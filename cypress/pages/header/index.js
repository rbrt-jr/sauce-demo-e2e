import { elements as el } from './elements'

export default new class Header {
    
    validateCartIcon(quantity){
        cy.get(el.cartBadge)
        .should('be.visible')
        .and('have.text', quantity.toString())
    }

    moveToCart(){
        cy.get(el.cartContainer).click()
    }

    validateCartIconRemoved(){
        cy.get(el.cartBadge)
        .should('not.exist')
    }
}