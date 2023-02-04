describe('UsersPage', () => {
    it('visit user entry page', () => {
        cy.visit('http://localhost:3000')
    })
    it('clicks of the load more button multiple times', () => {
        cy.get('[data-testid="more-button"]').click();
        cy.get('[data-testid="more-button"]').click();
        cy.get('[data-testid="more-button"]').click();
      })
})