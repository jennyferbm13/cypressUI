describe("Pagina para practica", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("Login", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#login-button").click();
    cy.get('[data-test="error')
      .should("be.visible")
      .and("contain", "Epic sadface: Username is required");
  });
});
