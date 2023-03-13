describe("Asercciones", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Asercion", () => {
    cy.visit("/automation-practice-form");
    //verificar si estoy en la pagina correcta
    cy.url().should("include", "demoqa.com");
    cy.get("#firstName").should("be.visible");
    //se pueden concatenar aserciones
    cy.get("#firstName")
      .should("be.visible")
      .should("have.attr", "placeholder", "First Name");
  });

  it("Aserciones 2", () => {
    cy.visit("/automation-practice-form");
    //element es un JQuery<HTMLElement>
    cy.get("#firstName").then((element) => {
      expect(element).to.be.visible;
      expect(element).to.have.attr("placeholder", "First Name");
    });
  });

  it("Aserciones 3", () => {
    cy.visit("/automation-practice-form");
    cy.get("#firstName").then((element) => {
      assert.equal(element.attr("placeholder"), "First Name");
    });
  });
});
