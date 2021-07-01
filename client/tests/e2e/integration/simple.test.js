describe('My First Test', () => {
  beforeEach(() => {});

  it('Visits the page', () => {
    cy.visit(`http://localhost:3000`);
  });

  it('Loading contact', () => {
    cy.findAllByTestId('loading-spinner');
  });

  it('Loading more contacts', () => {
    cy.findByTestId('loading-button').click();

    cy.findAllByTestId('loading-spinner');
  });
});
