// Fill web form
Cypress.Commands.add('fillForm', () => { 

    cy.get('input#orderform-firstname').type('John')
    cy.get('input#orderform-lastname').type('Doe')
    cy.get('input#orderform-email').type('doe@bornfight.dev')
    cy.get('input#orderform-country').type('Croatia')
    cy.get('input#orderform-city').type('Zagreb')
    cy.get('input#orderform-shippingaddress').type('Radnička 123')
    cy.contains('Place order').click()
    
   
 })

 // Select Publisher and Game
Cypress.Commands.add('selectGame', (publisher, game) => { 

    cy.get('select#orderform-publisher').select(publisher)
    cy.get('select#orderform-game').select(game)
    cy.contains('Add to cart').click()
    
 })

  // Wait, then go to page
 /*
    For some reason cypress doesn't click Order
    Form and Checkout, so I used this little dirty
    trick.
*/
Cypress.Commands.add('waitAndGo', (page) => { 

    cy.wait(200)
    cy.visit('/')
    cy.contains(page).click()

    
 })

