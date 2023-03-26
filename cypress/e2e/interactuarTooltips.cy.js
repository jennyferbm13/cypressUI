describe("Tooltips", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  //modal es propio de la pagina
  it("Interactuar con tooltips", () => {
    cy.visit("/tool-tips");
    cy.get("#toolTipButton").trigger("mouseover"); //pararse encima con el mouse
    cy.contains("You hovered over the Button").should("exist");
    cy.get("#toolTipButton").trigger("mouseout");
    cy.contains("You hovered over the Button").should("not.exist");
  });
});
