/// <reference types = "cypress" />

describe("Demo Test Suite", function(){

    it("1st Test Case", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#opentab').then(function(e1)
        {
            const u =e1.prop('href')
            cy.log(u)
            cy.visit(u)
        })
    
        
    })

})