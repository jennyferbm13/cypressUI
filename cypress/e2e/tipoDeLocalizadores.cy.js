describe("Tipos de localizadores", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Obtener por medio de un tag", () => {
    cy.visit("/automation-practice-form");
    cy.get("input");
  });

  it("Obtener por medio de un atributo", () => {
    cy.visit("/automation-practice-form");
    cy.get('[placeholder="First Name');
  });

  it("Obtener por medio de un atributo y tag", () => {
    cy.visit("/automation-practice-form");
    cy.get('input[placeholder="First Name');
  });

  it("Obtener por medio de un id", () => {
    cy.visit("/automation-practice-form");
    cy.get("#firstName");
  });
  //pero puede que esta clase lo tengan varios
  it("Obtener por medio de una clase(si tiene varias anidar con punto)", () => {
    cy.visit("/automation-practice-form");
    cy.get(".mr-sm2.form-control");
  });
});
