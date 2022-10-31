/// <reference types = "cypress" />

describe("Demo Test Suite", function(){

    it("1st Test Case", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')
        cy.get('.product:visible').should('have.length',4)
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

            cy.get('@productLocator').find('.product').each(($e1,index,$list) =>{

                const vegName = $e1.find('h4.product-name').text()
                if(vegName.includes('Cashews')){
                    cy.wrap($e1).find('button').click()
                }
                
            })
        cy.get('.cart-icon img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})