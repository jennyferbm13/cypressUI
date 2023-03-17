describe("Input", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Input", () => {
    cy.visit("/automation-practice-form");
    cy.get("#firstName").type("Javier"); //escribir en el input
    cy.get("#lastName").type("Fuentes");
    //si pongo cy.get("#firstName").type('Javier'); se concatena
    cy.get("#firstName").type("{selectAll}{backspace}"); //limpiar input
    cy.get("#firstName").type("Jennyfer");
    cy.get("#firstName").clear(); //limpiar input
  });
});
