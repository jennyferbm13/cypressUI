describe("Radio y check", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Check box and radio", () => {
    cy.visit("/automation-practice-form");
    //cy.get("#gender-radio-1").click();//falla porque esta cubierto por un label
    //cy.get("#gender-radio-1").click({ force: true }); //forzar el click directamente
    //cy.get("#gender-radio-1").check({ force: true }) //lo mismo
    cy.get('label[for="gender-radio-1"]').click(); //haciendo click en el label sin forzar

    cy.get("#hobbies-checkbox-1").check({ force: true });
    cy.get("#hobbies-checkbox-1").uncheck({ force: true });
    // cy.get('label[for="hobbies-checkbox-1').click();
  });
});
