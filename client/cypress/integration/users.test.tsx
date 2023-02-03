describe('UsersPage', () => {
    it('visit user entry page', () => {
        cy.visit('http://localhost:3000')
    })
    it("should consist of 20 users card per page", () => {
        cy.get("[data-test-id=user]").should("have.length", 20);
      });
})