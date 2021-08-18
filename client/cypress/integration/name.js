const getNameResponse = "Mocked Name";

describe("Home Page", () => {
  it("displays the right name on the home page", () => {
    cy.intercept("POST", "http://localhost:4000/", {
      statusCode: 200,
      body: {
        data: { name: "Mocked Name" },
      },
    });
    cy.visit("http://localhost:3000/");
    cy.contains("Welcome, Mocked Name");
  });
});
