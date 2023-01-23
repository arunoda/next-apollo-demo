describe('Users', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/users')
    cy.url().should('include', '/users')
    cy.get('[data-cy="user-card"]').should('have.length', 10)
    cy.get('[data-cy="load-more"]').click()
    cy.get('[data-cy="user-card"]').should('have.length', 20)
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
