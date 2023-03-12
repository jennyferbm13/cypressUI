describe("Guardar elementos", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("como se hace en cypress", () => {
    cy.visit("/automation-practice-form");
    cy.get('input[placeholder="First Name"]')
      .parents("form")
      .then((form) => {
        const inputs = form.find("input");
        const divs = form.find("div");
        const labels = form.find("label");

        expect(inputs.length).to.eq(15);
        expect(divs.length).to.eq(70);
        expect(labels.length).to.eq(16);
        // Si queremos que este elemento de Jquery se vuelva un elemento de cypress debemos de usar wrap
        cy.wrap(inputs).should("have.length", 15);
      });

    // como se haria en selenium o puppeteer
    // const form = cy.get('input[placeholder="First Name"]').parents('form')
    // form.find('input')
    // form.find('div')
    // form.find('label')
  });
});
