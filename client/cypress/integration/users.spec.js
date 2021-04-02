/// <reference types="cypress" />

describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true);
  });

  it('looks inside the head content using `cy.document()`', () => {
    // yields the window.document object
    // if you click on DOCUMENT from the command log,
    // it outputs the entire #document to the console
    cy.document();
  });

  describe('Users page', () => {
    beforeEach(() => {
      // runs before each test in the block
      cy.visit('http://localhost:3000/users');
    });

    it('should have page title', () => {
      cy.get('[data-test="page-title"]');
    });

    it('renders user-card details', () => {
      // yield children of the Grid
      cy.get('[data-test=grid]').children();
    });

    it("has a 'Load More' button", () => {
      cy.get('div').find('button').should('have.text', 'Load more');
    });
  });
});
