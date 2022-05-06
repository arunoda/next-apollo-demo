/// <reference types="cypress" />
import { uri } from '../../lib/constant';

// userList.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('UserList page: end to end testing', () => {
  beforeEach(() => {
    cy.intercept('POST', uri, { fixture: 'users.json' });
    cy.visit('http://localhost:3000/user-list');
  });

  it('UserList page : user list by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('section').should('have.length', 10);
    cy.get('button').should('have.length', 1);
    cy.get('button').click();
    cy.get('section').should('have.length', 20);
  });
});
