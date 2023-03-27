describe("Drag", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  //modal es propio de la pagina
  it("Interactuar con drag", () => {
    cy.visit("/dragabble");
    cy.get("#dragBox")
      .trigger("mousedown", { which: 1, pageX: 0, pageY: 0 }) //darle click sin soltar
      .trigger("mousemove", { which: 1, pageX: 200, pageY: 200 }) //moverlo ahí
      .trigger("mouseup", { force: true }); //soltar click
  });
});
