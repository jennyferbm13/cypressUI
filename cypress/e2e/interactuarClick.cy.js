describe("hooks", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Boton dinamico", () => {
    cy.visit("/buttons");
    cy.get("button").eq(3).click(); //obetener el tercer boton y darle click
    cy.get("#dynamicClickMessage")
      .should("be.visible")
      .and("contain", "You have done a dynamic click");
  });

  it("Double botton", () => {
    cy.visit("/buttons");
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage")
      .should("be.visible")
      .and("contain", "You have done a double click");
  });

  it("Right botton", () => {
    cy.visit("/buttons");
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage")
      .should("be.visible")
      .and("contain", "You have done a right click");
  });

  it("Force click", () => {
    cy.visit("/dynamic-properties");
    cy.get("#enableAfter").click({ timerout: 0, force: true });
  });

  it("click por posicion", () => {
    cy.visit("/buttons");
    cy.get("button").eq(3).parent().parent().click("topRight");
  });
});
