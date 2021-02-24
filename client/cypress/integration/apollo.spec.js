context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    
  
    it('goes to users page and selects more 3 times', () => {
      cy.get('[data-testid="user-link"] a').click();
      cy.get('[data-testid="more-button"]').click();
      cy.get('[data-testid="more-button"]').click();
      cy.get('[data-testid="more-button"]').click();
    })
  
  })
  