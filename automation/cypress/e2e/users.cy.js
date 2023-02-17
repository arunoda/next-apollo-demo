/// <reference types="cypress" />

const { expect } = require("chai")

describe('Users page', () => {

  beforeEach(() => {
    cy.visit('localhost:3000/users')
  })

  it('20 users are loaded initially', () => {
    cy.get('.container div.card').should('have.length', 20)
  })

  it('40 users are loaded after clicking Load More button once', () => {
    cy.get('.container div.card').should('have.length', 20)
    cy.scrollTo('bottom')
    cy.contains('Load More').click()  
    cy.get('.container div.card').should('have.length', 40)
  })

})