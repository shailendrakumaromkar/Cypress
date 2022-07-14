/// <reference types = "cypress" />

describe("Demo Test Suite", function(){

    it("1st Test Case", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
    })

})