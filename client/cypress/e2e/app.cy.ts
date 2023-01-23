/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="about"]').click()

    cy.url().should('include', '/about')
    cy.get('h1').contains('About Page')
  })

  it('should navigate to the users page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="users"]').click()

    cy.url().should('include', '/users')
    cy.get('h1').contains('Users Page')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
