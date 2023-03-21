describe("IExtraer info y validar", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  let text;
  it("Alias", () => {
    cy.visit("/automation-practice-form");
    cy.get("#firstName").as("nombre"); //alias
    cy.get("@nombre").type("Jennyfer");
    cy.get("@nombre").then(($nombre) => {
      text = $nombre.val();
      expect($nombre.val()).to.equal("Jennyfer");
    });
  });

  it("Compartir info", () => {
    cy.visit("/automation-practice-form");
    cy.get("#lastName").type(text);
    cy.get("#lastName").then(($lastName) => {
      expect($lastName.val()).to.equal("Jennyfer");
    });
  });
  it("Compartir info Function", function () {
    cy.visit("/automation-practice-form");
    cy.get("#firstName").as("nombre"); //alias
    cy.get("@nombre").type("Jennyfer");
    cy.get("@nombre").then(($nombre) => {
      text = $nombre.val();
      expect($nombre.val()).to.equal("Jennyfer");
    });
    cy.get("@nombre").invoke("val").should("equal", "Jennyfer");
    cy.get("@nombre").invoke("val").as("nombreGlobal");
  });

  it("Recibir info", function () {
    cy.visit("/automation-practice-form");
    cy.get("#lastName").type(this.nombreGlobal);
    cy.get("#lastName").then(($lastName) => {
      expect($lastName.val()).to.equal("Jennyfer");
    });
  });
});
