/// <reference types = "cypress" />

describe("Demo Test Suite", function(){

    it("1st Test Case", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

       cy.get('tr td:nth-child(2)').each(($e1,index,$list) =>{

        const courseTest = $e1.text()
        if(courseTest.includes('Python'))
        {
           cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
            const priceval=price.text()
            expect(priceval).to.equal('25')
           })
        }

    })
        
    })

})