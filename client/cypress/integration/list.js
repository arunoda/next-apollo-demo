import { bigReponse, response } from "../mock/mock";

describe("Listing Page", () => {
  beforeEach(() => {
    cy.intercept("POST", "http://localhost:4000/", {
      statusCode: 200,
      body: response,
    });
  });

  it("displays a list of cards", () => {
    cy.visit("http://localhost:3000/list");
    cy.get("[data-testid='cardContainer']").should("have.length", 3);
  });

  it("should display a searchbar", () => {
    cy.visit("http://localhost:3000/list");
    cy.get("[data-testid='searchBar']").should("exist");
  });
  it("should not display the load more", () => {
    cy.visit("http://localhost:3000/list");
    cy.get("[data-testid='loadButton']").should("not.exist");
  });
  it("should display the load more", () => {
    cy.intercept("POST", "http://localhost:4000/", {
      statusCode: 200,
      body: bigReponse,
    });

    cy.visit("http://localhost:3000/list");
    cy.get("[data-testid='loadButton']").should("exist");
  });
});
