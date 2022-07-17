/// <reference types = "cypress" />

describe("Demo Test Suite", function(){

    it("1st Test Case", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') 
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1', 'option3'])

        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')
        

        //dynamic dropdown
        cy.get('#autocomplete').type('Ind')
        
        cy.get('.ui-menu-item div').each(($e1,index,$list) =>{

            if($e1.text()==='India'){
                cy.wrap($e1).click()

            }
        })

            cy.get('#autocomplete').should('have.value', 'India')
            
  

        }  )

})