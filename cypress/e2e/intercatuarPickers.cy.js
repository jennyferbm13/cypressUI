describe("Pickers", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Interactuar con pickers", () => {
    cy.visit("https://material.angular.io/components/datepicker/overview");
    cy.get("datepicker-overview-example")
      .find("label")
      .eq(0)
      .type("11/03/2022"); //escribir fecha

    cy.get("datepicker-overview-example").find("svg").click({ force: true }); //abre para seleccionara fecha, hay veces se debe dar click primero para abrir input
  });
});
