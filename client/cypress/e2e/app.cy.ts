describe("App", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Check Next and Previous buttons
    cy.get('[role="button"]').contains("Previous");
    cy.get('[role="button"]').contains("Next");
  });

  it("should check if cards exist", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Check if cards exist
    cy.get('[data-testid="card"]').should("exist");
  });

  it("should check if there are multiple cards", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Check if there are multiple cards
    cy.get('[data-testid="card"]').should("have.length.at.least", 10);
  });

  it("should check if cards change on next button click", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Get the initial cards
    cy.get('[data-testid="card"]').then(($initialCards) => {
      // Save the initial cards
      const initialCards = $initialCards;

      // Click on the "Next" button
      cy.get('[role="button"]').contains("Next").click();

      // Check if the cards have changed
      cy.get('[data-testid="card"]').should(($newCards) => {
        // Compare the initial cards with the new cards
        expect($newCards).not.to.eq(initialCards);
      });
    });
  });
});
