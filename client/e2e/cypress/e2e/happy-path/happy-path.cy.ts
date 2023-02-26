context("Happy Path", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should be able to see the header and text on the home page.", () => {
    // The header should be set for the home page.
    cy.get("title").should("contain", "Home Page");

    // The header should be visible on the home page.
    cy.get("header").should("be.visible");

    // The nav links should be visible on the home page.
    cy.get("nav").should("be.visible");
    cy.get("nav").should("contain", "Home");
    cy.get("nav").should("contain", "Employees");
    cy.get("nav").should("contain", "About Me");

    // The title text should be visible.
    cy.get("h1").should(
      "contain.text",
      "Welcome to Nick Morgan's Technical test."
    );

    // The subtitle text should be visible.
    cy.get("p").should(
      "contain.text",
      `Please visit the employee's list page via the navigation bar under "Employees".`
    );
  });
  it("Should redirect us to the employee's list page on click of the nav button.", () => {
    // The button should be visible on the home page.
    cy.get("nav").should("contain", "Employees");

    // Should be able to click the button.
    cy.contains("Employees").click();

    // The URL should be changed to the employee's list page.
    cy.url().should("eq", "http://localhost:3000/employees");
  });
  it("Should be able to see all elements on the employee's list page once navigated.", () => {
    // The button should be visible on the home page.
    cy.get("nav").should("contain", "Employees");

    // Should be able to click the button.
    cy.contains("Employees").click();

    // The URL should be changed to the employee's list page.
    cy.url().should("eq", "http://localhost:3000/employees");

    // Should show a list of 20 employees.
    cy.get("li").should("have.length", 20);

    // The button should be visible.
    cy.get("button").should("be.visible");

    // The button should be called Load More.
    cy.get("button").should("contain", "Load More");

    // Should be able to click the button.
    cy.contains("Load More").click();

    // Should show a list of 40 employees.
    cy.get("li").should("have.length", 40);

    // The button should load another 20 people when clicked.
    cy.contains("Load More").click();
    cy.get("li").should("have.length", 60);
  });
});
