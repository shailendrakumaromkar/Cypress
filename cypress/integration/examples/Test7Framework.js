/// <reference types = "cypress" />

describe("Demo Test Suite", function(){
    before(() => {
        // root-level hooks
        // runs once before all tests
        cy.fixture('example').then(function(data){
            this.data=data
        })
      })

    it("1st Test Case", function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get('input[name="name"]:nth-child(2)').type( this.data.name)
        cy.get('select').select( this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength',2)
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        });
        

        
    })

})