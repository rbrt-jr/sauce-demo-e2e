import { elements as el } from './elements'

export default new class Inventory {
    validateInventoryPage(){
         cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')      
         cy.screenshot('Login_Successfully_Inventory')
    }

    addItemToCart(item){
        cy.get(el.itemAddedToCart(item)).click()
    }

    removeItemFromCart(item){
       cy.get(el.itemRemovedFromCart(item)).click()
    }

}