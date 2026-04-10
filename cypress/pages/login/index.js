import { elements as el} from "./elements"


export default new class Login {     
    visit(){
        cy.visit('https://www.saucedemo.com/')
    }

    fillUserFieldsCorrectly(){
        cy.get(el.username).type('standard_user')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginButton).click()
      
    }

    fillUserFieldsWrongly(){
        cy.get(el.username).type('name_invalid')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginButton).click()

    }

    validateLoginFailed(){
        cy.get(el.errorLogin).should('contain.text','Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('Login_Failed')
    }



}