export default new class Cart {
    validateItemAddedToCart(item){
        cy.contains(item).should('be.visible')
    }

}