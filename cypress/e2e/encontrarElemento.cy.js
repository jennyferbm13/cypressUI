describe("Encontrar elementos", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Usando contains", () => {
    cy.visit("/automation-practice-form");
    cy.contains("Reading");
    //clase y texto
    cy.contains(".header-wrapper", "Widgets");
  });
  //navegar en el DOM
  it("Usando parent", () => {
    cy.visit("/automation-practice-form");
    //padre principal
    cy.get('input[placeholder="First Name').parent(); //entrar al div
    //todos los padres
    cy.get('input[placeholder="First Name').parents();

    //encontrar un padre(s) en especifico
    cy.get('input[placeholder="First Name').parents().find("label");

    //misma forma de llegar a la linea anterior
    //find necesita ir concatenado de un elemento del DOM, y get no lo da, find no puede ir solo
    cy.get("form").find("label");
  });
});
