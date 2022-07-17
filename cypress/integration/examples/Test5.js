/// <reference types = "cypress" />

describe("Demo Test Suite", function(){

    it("1st Test Case", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

       cy.get('div.mouse-hover-content').invoke('show')
       cy.contains('Top').click()
       cy.url().should('include', 'top')


    
        
    })

})