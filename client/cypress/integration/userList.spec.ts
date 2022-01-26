/// <reference types="cypress" />
import { uri } from '../../lib/constant';
// import cy from "cypress"

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('UserList page: end to end testing', () => {

    beforeEach(() => {
      cy.intercept('POST', uri, { fixture: 'users.json' });
      cy.visit("http://localhost:3000/user-list");
    })

    it('UserList page : user list by default', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
      cy.get('section').should('have.length', 10);
      cy.get('button').should('have.length', 1);
      cy.get('button').click();
      cy.get('section').should('have.length', 20);
    })
})
  