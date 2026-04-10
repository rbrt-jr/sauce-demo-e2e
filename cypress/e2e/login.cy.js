import Login from '../pages/login'
import Inventory from '../pages/inventory'


describe('Login', () => {
    
    beforeEach(() => {
        
        //Arrange
        Login.visit()
    })
    
    it('Login sucessfully', () => {       

        //Act
        Login.fillUserFieldsCorrectly()   

        //Assert
        Inventory.validateInventoryPage()
    })

    it('Login failed', () => {    
        
        //Act
        Login.fillUserFieldsWrongly()
        
        //Assert
        Login.validateLoginFailed()
    })

    
})