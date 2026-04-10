import Login from '../pages/login'
import Inventory from '../pages/inventory'
import Header from '../pages/header'
import Cart from '../pages/cart'

describe('Purchase Flow', () => {
        beforeEach(() => {
            //Arrange
            Login.visit()
            Login.fillUserFieldsCorrectly() 
        })
        
        it.only('Add item to cart', () => {
            //Act 
            Inventory.addItemToCart('Sauce Labs Backpack') 
            
            //Assert 
            Header.validateCartIcon(1)
            Header.moveToCart()
            Cart.validateItemAddedToCart('Sauce Labs Backpack')         

        })

        it('Remove item from cart', () => {
            //Arrange
            Inventory.addItemToCart('Sauce Labs Backpack') 

            //Act
            Inventory.removeItemFromCart()

            //Assert 
            Header.validateCartIconRemoved()
            
        })
 
   
})
    